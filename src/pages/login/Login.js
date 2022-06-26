import Form from './../../components/form/Form';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';
import './Login.css';
import Auth from '../../api/entities/Auth';
import { useNavigate } from 'react-router-dom';

export default function Login (){
    const navigate = useNavigate();

    const setToken = (event) =>{
        event.preventDefault();
        const preload = {
            email: event.target.inputUserEmail.value,
            password: event.target.inputUserPassword.value,
        }
        Auth.login(preload).then(response => {
            localStorage.setItem('auth',response.data.token);
            navigate('/');
        })
    }
    return (
        <section className="login">
            <Form formTitle="User Login" onSubmit={setToken}>
                <Input id="inputUserEmail" description="user email" />
                <Input id="inputUserPassword" description="user password" />
                <Button value="Login" />
            </Form>
        </section>
    );
}