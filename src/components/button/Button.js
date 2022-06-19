import './Button.css';

export default function Button (props){

    const preventSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <button className="button" onClick={preventSubmit}>
            {props.value}
        </button>
    );
}