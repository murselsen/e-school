import React, {useState} from "react";

import Css from "./CreateProfileTabs.module.css";
import {useFormikContext, ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import {useSelector, useDispatch} from "react-redux";
import {
    selectUserRole
} from "../../redux/auth/selectors.js";
import {registerParent} from "../../redux/parent/thunk.js";

import {GrNext, GrFormPrevious, GrFormNext} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdAlternateEmail} from "react-icons/md";
import {FaRegAddressCard, FaTrash} from "react-icons/fa6";
import {FaStickyNote} from "react-icons/fa";
import {RiStickyNoteAddLine} from "react-icons/ri";
import {IoSend} from "react-icons/io5";
import * as Yup from 'yup';

const CreateProfileTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const userRole = useSelector(selectUserRole);

    const nextHandler = (step) => {
        if (step) {
            setActiveTab(step);
            return;
        }
        setActiveTab(activeTab + 1);
    }
    const beforeHandler = () => {
        if (activeTab === 1) {
            return;
        }
        if (activeTab === -1) {
            setActiveTab(1);
            return;
        }
        setActiveTab(activeTab + -1);
    }


    return (<div className={Css.TabsArea}>
        <div className={Css.Header}>
            <ul className={Css.TabList}>
                <TabItem
                    step={1}
                    icon={<CgProfile size={24}/>}
                    title={"Personal Information"}
                    isActive={activeTab === 1}
                    toggleClick={() => setActiveTab(1)}
                />


            </ul>
        </div>
        <div className={Css.Body}>

            {userRole === "parent" && (<ParentForm activeTab={activeTab} stepHandler={{nextHandler, beforeHandler}}/>)}
            {/*{userRole === "teacher" && (*/}
            {/*    <TeacherForm activeTab={activeTab} stepHandler={{nextHandler, beforeHandler}}/>)}*/}

        </div>
    </div>);
};

const ParentForm = ({activeTab, stepHandler}) => {
    const dispatch = useDispatch();
    const parentFormValidationSchema = Yup.object().shape({
        firstName: Yup.string().required("Firstname is required"),
        lastName: Yup.string().required("Lastname is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        address: Yup.string().required("Address is required"),
        notes: Yup.array().of(Yup.string()),
    })
    const submitHandler = (values, actions) => {


        values.name = values.firstName + " " + values.lastName;
        dispatch(registerParent(values));

    }
    return (<Formik initialValues={{
        firstName: "", lastName: "", email: "", phone: "", address: "", notes: [],
    }} onSubmit={submitHandler} validationSchema={parentFormValidationSchema}>


        <Form className={Css.TabContent}>

            <div className={Css.FormGroup}>
                <label htmlFor={"firstName"} className={Css.FormLabel}>
                    Firstname: <span>*</span>
                </label>
                <div className={Css.FormInput_Group}>
                    <CgProfile size={24} className={Css.FormIcon}/>
                    <Field name={"firstName"} type={"text"} id={"firstName"} className={Css.FormInput}
                           placeholder={"Enter Firstname"} required/>
                </div>
                <ErrorMessage name={"firstName"} className={Css.FormError} component={"span"}/>
            </div>
            <div className={Css.FormGroup}>
                <label htmlFor={"lastName"} className={Css.FormLabel}>
                    Lastname: <span>*</span>
                </label>
                <div className={Css.FormInput_Group}>
                    <CgProfile size={24} className={Css.FormIcon}/>
                    <Field name={"lastName"} type={"text"} id={"lastName"} className={Css.FormInput}
                           placeholder={"Enter Lastname"} required/>
                </div>
                <ErrorMessage name={"lastName"} className={Css.FormError} component={"span"}/>
            </div>
            <div className={Css.FormGroup}>
                <label htmlFor={"email"} className={Css.FormLabel}>
                    Email: <span>*</span>
                </label>
                <div className={Css.FormInput_Group}>
                    <MdAlternateEmail size={24} className={Css.FormIcon}/>
                    <Field name={"email"} type={"email"} id={"email"} className={Css.FormInput}
                           placeholder={"Enter email address"} required/>
                </div>
                <ErrorMessage name={"email"} className={Css.FormError} component={"span"}/>
            </div>
            <div className={Css.FormGroup}>
                <label htmlFor={"phone"} className={Css.FormLabel}>
                    Phone: <span>*</span>
                </label>
                <div className={Css.FormInput_Group}>
                    <BsFillTelephoneFill size={24} className={Css.FormIcon}/>
                    <Field name={"phone"} type={"tel"} id={"phone"} className={Css.FormInput}
                           placeholder={"Enter phone number"} required/>
                </div>
                <ErrorMessage name={"phone"} className={Css.FormError} component={"span"}/>
            </div>
            <div className={[Css.FormGroup, Css.FormTextArea].join(' ')}>
                <label htmlFor={"phone"} className={Css.FormLabel}>
                    Address:
                </label>
                <div className={Css.FormInput_Group}>
                    <FaRegAddressCard size={24} className={Css.FormIcon}/>
                    <Field as={"textarea"} name={"address"} type={"textarea"} id={"address"}
                           className={Css.FormInput} placeholder={"Enter address"}
                    />
                </div>
                <ErrorMessage name={"phone"} className={Css.FormError} component={"span"}/>
            </div>
            <div className={Css.FormGroup}>
                <label className={Css.FormLabel}>
                    Notes:
                </label>
                <NoteList/>
            </div>
            <div className={Css.TabContent_BtnGroup}>


                <button type="reset" className={Css.TabContent_Btn}>
                    <p>Reset </p>
                </button>
                <button type="submit" className={Css.TabContent_Btn}>
                    <p>Save</p>
                </button>
            </div>


        </Form>
    </Formik>)
};


const NoteList = () => {
    const {values} = useFormikContext(); // Formik context'e direkt erişim

    return (<FieldArray name="notes">
        {({push, remove}) => (<div>

            {values.notes.map((_, index) => (<div key={index} style={{marginBottom: "8px"}}>
                <div className={Css.FormInput_Group}>
                    <FaStickyNote className={Css.FormInput_Icon}/>
                    <Field
                        name={`notes[${index}]`}
                        placeholder="Enter note"
                        className={Css.FormInput}
                    />

                    <button
                        type="button"
                        onClick={() => remove(index)}
                        disabled={values.notes.length === 1}
                    >
                        <FaTrash/>
                    </button>
                </div>
            </div>))}

            <button type="button" onClick={() => push("default value")} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
                marginInlineStart: "15px",
                cursor: "pointer",
            }}>
                <RiStickyNoteAddLine size={30}/> <span>Not Add</span>
            </button>
        </div>)}
    </FieldArray>)

}


// const TeacherForm = ({
// activeTab, nextHandler
// }) =>
// {
//     return (<Formik>
//         <Form className={Css.TabContent}>
//             {activeTab === 1 && (<div className={Css.TabContent}>
//                 Content for Step 1: Basic Info
//                 <button className={Css.TabContentBtn} onClick={() => nextHandler()}>
//                     <GrNext/>
//                 </button>
//             </div>)}
//             {activeTab === 2 && (<div className={Css.TabContent}>
//                 Content for Step 2: Profile Details
//             </div>)}
//             {activeTab === -1 && (<div className={Css.TabContent}>
//                 End Step: Confirm & Submit
//             </div>)}
//         </Form>
//     </Formik>)
// }


const TabItem = ({title, icon, isActive, toggleClick}) => {
    return (<li
        className={`${Css.TabItem} ${isActive ? Css.active : ""}`}
        onClick={toggleClick}
    >
        {icon}   <p>{title}</p>
    </li>);
};

export default CreateProfileTabs;
