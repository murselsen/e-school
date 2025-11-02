import React, {useState} from "react";

import Css from "./CreateProfileTabs.module.css";
import {useFormikContext, ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import {

    selectUserRole,
} from "../../redux/auth/selectors.js";
import {GrNext, GrFormPrevious, GrFormNext} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdAlternateEmail} from "react-icons/md";
import {FaRegAddressCard, FaTrash} from "react-icons/fa6";


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
        setActiveTab(activeTab + -1);
    }


    return (<div className={Css.TabsArea}>
        <div className={Css.Header}>
            <ul className={Css.TabList}>
                <TabItem
                    step={1}
                    title={"Step 1: Kişisel Bigiler"}
                    isActive={activeTab === 1}
                    toggleClick={() => setActiveTab(1)}
                />
                {userRole === "parent" && (<>

                    <TabItem
                        step={2}
                        title={"Step 2: Öğrenci Seçimi"}
                        isActive={activeTab === 2}
                        toggleClick={() => {
                            activeTab > 2 ? setActiveTab(2) : null
                        }}
                    />

                </>)}
                <TabItem
                    step={-1}
                    title={"Step 3: Onayla & Kaydet"}
                    isActive={activeTab === -1}

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


    return (<Formik initialValues={{
        firstName: "", lastName: "", email: "", phone: "", address: "", notes: [],
    }} onSubmit={(values, {resetForm}) => {
        console.log(values);
        resetForm()
    }}>
        <Form className={Css.TabContent}>
            {activeTab === 1 && (<>
                <div className={Css.FormGroup}>
                    <label htmlFor={"firstName"} className={Css.FormLabel}>
                        Firstname: <span>*</span>
                    </label>
                    <div className={Css.FormInput_Group}>
                        <CgProfile size={24} className={Css.FormIcon}/>
                        <Field name={"firstName"} type={"text"} id={"firstName"} className={Css.FormInput}
                               required/>
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
                               required/>
                    </div>
                    <ErrorMessage name={"lastName"} className={Css.FormError} component={"span"}/>
                </div>
                <div className={Css.FormGroup}>
                    <label htmlFor={"email"} className={Css.FormLabel}>
                        Email: <span>*</span>
                    </label>
                    <div className={Css.FormInput_Group}>
                        <MdAlternateEmail size={24} className={Css.FormIcon}/>
                        <Field name={"email"} type={"email"} id={"email"} className={Css.FormInput} required/>
                    </div>
                    <ErrorMessage name={"email"} className={Css.FormError} component={"span"}/>
                </div>
                <div className={Css.FormGroup}>
                    <label htmlFor={"phone"} className={Css.FormLabel}>
                        Phone: <span>*</span>
                    </label>
                    <div className={Css.FormInput_Group}>
                        <BsFillTelephoneFill size={24} className={Css.FormIcon}/>
                        <Field name={"phone"} type={"tel"} id={"phone"} className={Css.FormInput} required/>
                    </div>
                    <ErrorMessage name={"phone"} className={Css.FormError} component={"span"}/>
                </div>
                <div className={[Css.FormGroup, Css.FormTextArea].join(' ')}>
                    <label htmlFor={"phone"} className={Css.FormLabel}>
                        Address:
                    </label>
                    <div className={Css.FormInput_Group}>
                        <FaRegAddressCard size={24} className={Css.FormIcon}/>
                        <textarea name={"address"} type={"textarea"} id={"address"} className={Css.FormInput}
                                  rows={1} cols={50}/>
                    </div>
                    <ErrorMessage name={"phone"} className={Css.FormError} component={"span"}/>
                </div>
                <div className={Css.FormGroup}>
                    <NoteList/>
                </div>
            </>)}
            <div className={Css.TabContent_BtnGroup}>
                {activeTab > 1 && <button className={Css.TabContent_Btn} onClick={() => stepHandler.beforeHandler()}>
                    <GrFormPrevious size={30}/>
                </button>}

                <button className={Css.TabContent_Btn} onClick={() => stepHandler.nextHandler()}>
                    <GrFormNext size={30}/>
                </button>
            </div>
        </Form>
    </Formik>)
};


const NoteList = () => {
    const {values} = useFormikContext(); // Formik context'e direkt erişim

    return (<FieldArray name="notes">
        {({push, remove}) => (<>
            {values.notes.map((_, index) => (<div key={index} style={{marginBottom: "8px"}}>

                    <Field
                        name={`values.notes[${index}]`}
                        placeholder="Not Girin"
                        className={Css.FormInput}
                    />
                    <button
                        type="button"
                        onClick={() => remove(index)}
                        disabled={values.notes.length === 1}
                    >
                        <FaTrash/>
                    </button>
                </div>))}

            <button type="button" onClick={() => push("default value")}>
                + Not Ekle
            </button>
        </>)}
    </FieldArray>)

}


// const TeacherForm = ({activeTab, nextHandler}) => {
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


const TabItem = ({title, isActive, toggleClick}) => {
    return (<li
        className={`${Css.TabItem} ${isActive ? Css.active : ""}`}
        onClick={toggleClick}
    >
        {title}
    </li>);
};

export default CreateProfileTabs;
