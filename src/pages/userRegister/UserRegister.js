import Form from './../../components/form/Form';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';
import User from '../../api/entities/User';
import './UserRegister.css';
import { useEffect } from 'react';

export default function UserRegister (){

    const preload = {
        userName: "",
        email: "",
        password: "",
    }

    const createUser = (event) => {
        event.preventDefault();
        console.log("teste")

        preload.userName = event.target.inputUserName.value;
        preload.email = event.target.inputEmail.value;
        preload.password = event.target.inputUserPassword.value;

        User.createUser(preload);
    };

    useEffect(()=>{

    },[]);

    return (
        <section className="user_register">
            <Form formTitle="New User" onSubmit={createUser}>
                <Input id="inputUserName" description="User Name" />
                <Input id="inputEmail" description="Email" />
                <Input id="inputUserPassword" description="User Password" />
                <Button value="Register User" />
            </Form>
        </section>
    );
}