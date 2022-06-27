export default function setDateFormat(dateValue) {
    let date = new Date(dateValue);
    return (date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate());
}