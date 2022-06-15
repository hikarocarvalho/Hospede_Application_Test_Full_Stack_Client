import './Table.css';

export default function Table (props){
    return (
        <table className="table">
            {props.children}
        </table>
    );
}