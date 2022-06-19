import ApiConfig from './ApiConfig';
import { toast } from 'react-toastify';

const ApiCrud = (entityName)=>({
    create: (url,data) => (       
        ApiConfig.withOutAutenticate.post(url,data)
        .then(response => {
            toast(`Now you create the ${entityName}!`);
            return response;
        })
        .catch(error=> {
            toast(`Error to create the ${entityName}!`);
            return error;
        })
    ),
    getById: (url,id) => (
        ApiConfig.withOutAutenticate.get(url+"/"+id)
    ),
    getAll: (url) => (
        ApiConfig.withOutAutenticate.get(url)
    ),
    update: (url,data,id) => (
        ApiConfig.withOutAutenticate.patch(url+"/"+id,data)
        .then(response => {
            toast(`Now you have updated the ${entityName}!`);
            return response;
        })
        .catch(error=> {
            toast(`Error to update the ${entityName}!`);
            return error;
        })
    ),
    delete: (url,id) => (
        ApiConfig.withOutAutenticate.delete(url+"/"+id)
        .then(response => {
            toast(`Now you have deleted the ${entityName}!`);
            return response;
        })
        .catch(error=> {
            toast(`Error to delete the ${entityName}!`);
            return error;
        })
    ),
})

export default ApiCrud;