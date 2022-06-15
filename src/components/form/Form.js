import './Form.css';

export default function Form(props) {
    return (
        <form className="form">
            <fieldset className="fieldset">
                {props.children}
            </fieldset>
        </form>
    );
}