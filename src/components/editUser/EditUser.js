import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import "./EditUser.css";
import { useEffect, useState } from "react";
import emailValidate from "../../scripts/validations/emailValidate";

export default function EditUser(props) {
  const [userEdit, setUserEdit] = useState();

  const saveEditUserValues = (event) => {
    event.preventDefault();
    let newUserData = userEdit.user;
    newUserData.userName = event.target.inputUserName.value;
    newUserData.email = event.target.inputEmail.value;
    newUserData.password = event.target.inputUserPassword.value;
    props.updateUser(newUserData);
  };

  useEffect(() => {
    if (
      !userEdit ||
      JSON.stringify(props.userData) !== JSON.stringify(userEdit.user)
    ) {
      setUserEdit({
        ...userEdit,
        user: props.userData,
      });
    }
  }, []);

  return (
    <div className="edit_user">
      {userEdit ? (
        <Form formTitle="Edit User" onSubmit={saveEditUserValues}>
          <Input
            id="inputUserName"
            description="User Name"
            value={userEdit.user.userName}
          />
          <Input
            id="inputEmail"
            description="Email"
            value={userEdit.user.email}
            onChange={emailValidate}
          />
          <Input
            id="inputUserPassword"
            description="User Password"
            value={"****"}
          />
          <Button value="Edit User" />
        </Form>
      ) : null}
    </div>
  );
}
