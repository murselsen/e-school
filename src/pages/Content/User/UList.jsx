// Redux Toolkit
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Operations
import { getAllUsers } from "../../../redux/user/operations";

// Styles
import styles from "../../Styles/UList.module.css";
import Loading from "../../../components/Loading/Loading";
import toast from "react-hot-toast";

const UList = () => {
  const dispatch = useDispatch();
  const { data: users, isRefreshing } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isRefreshing && !users) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.UList_Area}>
        <h2 className={styles.UList_Title}>User List</h2>
        <div className={styles.UList_Grid}>
          {users && users.length > 0 ? (
            users.map((user) => <User_Box key={user._id} user={user} />)
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>
    </>
  );
};

const User_Box = ({ user }) => {
  const onDeleteHandle = (_id) => {
    const isDeleteRequest = confirm(
      "ID: " + _id + "\nAre you sure to delete this user?"
    );
    console.log("Delete user:", _id);
    if (isDeleteRequest) {
      toast.success("User deleted successfully!");
    } else {
      toast.error("User deletion cancelled.");
    }
  };

  return (
    <div className={styles.User_Box}>
      <div className={styles.Header}>
        <h3 className={styles.Title}>
          Username: <span>{user.username}</span>
        </h3>
        <p className={styles.SubTitle}>
          Email: <span>{user.email}</span>
        </p>
      </div>
      <div className={styles.Body}>
        <ul className={styles.DataList}>
          <li className={styles.DataList_Item}>
            Role: <span>{user.role}</span>
          </li>
          <li className={styles.DataList_Item}>
            Verify: <span>{user.role ? "True" : "False"}</span>
          </li>
          <li className={styles.DataList_Item}>
            Last Login:{" "}
            <span>{new Date(user.lastLogin).toLocaleDateString("en-US")}</span>
          </li>
          <li className={styles.DataList_Item}>
            CreateAt:{" "}
            <span>{new Date(user.createdAt).toLocaleDateString("en-US")}</span>
          </li>
        </ul>
      </div>
      <div className={styles.Footer}>
        <button
          className={styles.Button_Delete}
          onClick={onDeleteHandle.bind(event, user._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UList;
