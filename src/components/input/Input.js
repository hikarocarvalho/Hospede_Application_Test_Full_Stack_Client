import './Input.css';

export default function Input (props){
    return (
        <>
            <label hrmlFor={props.id} >{props.description}</label>
            <input id={props.id} name={props.name} />
        </>
    );
}