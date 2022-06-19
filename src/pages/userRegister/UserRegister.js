import Form from './../../components/form/Form';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';
import Fieldset from '../../components/fieldSet/Fieldset';
import SetAddress from '../../scripts/SetAddress';
import './UserRegister.css';
import { useEffect } from 'react';

export default function UserRegister (){

    const searchPostalCode = (event) => {
        event.preventDefault();
        if(event.target.value.length == 8){
            SetAddress(event.target.parentElement.children);
        }
    }

    useEffect(()=>{

    },[])

    return (
        <section className="user_register">
            <Form formTitle="New User">
                <Fieldset fieldsetTitle="Personal Data">
                    <Input id="inputCompleteName" description="Complete Name"></Input>
                    <Input id="inputBirthDate" description="Birth Date"></Input>
                    <Input id="inputCpf" description="Cpf"></Input>
                </Fieldset>
                <Fieldset fieldsetTitle="User Data">
                    <Input id="inputEmail" description="Email"></Input>
                    <Input id="inputUserName" description="User Name"></Input>
                    <Input id="inputUserPassword" description="User Password"></Input>
                </Fieldset>
                <Fieldset fieldsetTitle="Address Data">
                    <Input id="inputPostCode" description="Post Code" onChange={searchPostalCode}></Input>
                    <Input id="inputStreet" description="Street"></Input>
                    <Input id="inputComplement" description="Complement"></Input>
                    <Input id="inputProvince" description="Province"></Input>
                    <Input id="inputCity" description="City"></Input>
                    <Input id="inputState" description="State"></Input>
                    <Button value="Register User" />
                </Fieldset>
            </Form>
        </section>
    );
}