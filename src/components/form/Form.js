import './Form.css';

export default function Form(props) {
    return (
        <form className="form">
            <fieldset className="fieldset_form">
                <legend className="form_title">{props.formTitle}</legend>
                {props.children}
            </fieldset>
        </form>
    );
}