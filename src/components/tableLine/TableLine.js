import './TableLine.css';

export default function TableLine (props){
    return (
        <td className="table_line">
            {props.lineColumnValue}
        </td>
    );
}