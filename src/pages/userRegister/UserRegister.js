import Form from './../../components/form/Form';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';
import './UserRegister.css';

export default function UserRegister (){
    return (
        <section className="user_register">
            <Form formTitle="New User">
                <Input id="inputUserName" description="User Name"></Input>
                <Input id="inputUserPassword" description="User Password"></Input>
                <Button value="Register User" />
            </Form>
        </section>
    );
}