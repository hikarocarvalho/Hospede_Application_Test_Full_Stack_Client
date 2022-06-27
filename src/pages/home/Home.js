import Table from "../../components/table/Table";
import TableLine from "../../components/tableLine/TableLine";
import TableTitle from "../../components/tableTitle/TableTitle";
import { useState, useEffect } from "react";
import "./Home.css";
import User from "../../api/entities/User";
import EditUser from "../../components/editUser/EditUser";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import setDateFormat from "../../scripts/validations/setDateFormat";

export default function Home() {
  const [userList, setUserList] = useState();
  const [userEdit, setUserEdit] = useState();
  const [execute, setExecute] = useState();

  const navigate = useNavigate();

  const tableTitle = [
    "User Name",
    "User E-mail",
    "User Registration Date",
    "Options",
  ];

  const getUserList = () => {
    User.getUsers().then((result) => {
      setUserList({
        ...userList,
        list: result.data,
      });
    });
  };

  const editUser = (id) => {
    User.getUser(id).then((result) => {
      setUserEdit(undefined);
      setUserEdit({
        ...userEdit,
        edit: result.data,
      });
    });
  };

  const updateUser = (data) => {
    const executeTask = () =>
      User.updateUser(userEdit.edit.id, data).then(() => {
        setUserEdit(undefined);
        getUserList();
      });

    setExecute({
      ...execute,
      task: executeTask,
    });
  };

  const deleteUser = (id) => {
    const executeTask = () =>
      User.deleteUser(id).then(() => {
        getUserList();
      });

    setExecute({
      ...execute,
      task: executeTask,
    });
  };

  const closeModal = (event) => {
    event.preventDefault();
    setExecute(undefined);
  };

  const options = (id) => {
    return (
      <div className="user_options">
        <i className="bi bi-pencil-fill" onClick={() => editUser(id)}></i>
        <i className="bi bi-trash-fill" onClick={() => deleteUser(id)}></i>
      </div>
    );
  };

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("auth");
    navigate("/login");
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <section className="home">
      <i className="bi bi-arrow-right-square-fill logout" onClick={logout}></i>
      {userEdit ? (
        <EditUser updateUser={updateUser} userData={userEdit.edit} />
      ) : null}
      <Table>
        <thead>
          <tr>
            {tableTitle.map((titleItem, index) => (
              <TableTitle title={titleItem} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {userList
            ? userList.list.map((user) => (
                <tr key={user.id} className="table_body_line">
                  <TableLine lineColumnValue={user.userName} />
                  <TableLine lineColumnValue={user.email} />
                  <TableLine lineColumnValue={setDateFormat(user.created_at)} />
                  <TableLine lineColumnValue={options(user.id)} />
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      {execute ? <Modal execute={execute.task} close={closeModal} /> : null}
    </section>
  );
}
