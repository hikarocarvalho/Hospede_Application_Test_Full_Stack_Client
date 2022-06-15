import Form from './../../components/form/Form';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';
import './Login.css';

export default function Login (){
    return (
        <section className="login">
            <Form formTitle="User Login">
                <Input id="inputUserName" description="user name"></Input>
                <Input id="inputUserPassword" description="user password" ></Input>
                <Button value="Login" />
            </Form>
        </section>
    );
}