import ApiCep from "../api/ApiCep";

const SetAddress = (eventInputs) => {
  ApiCep(eventInputs.inputPostCode.value).then((addressData) => {
    console.log(addressData);
    eventInputs.inputStreet.value = addressData.logradouro;
    eventInputs.inputComplement.value = addressData.complemento;
    eventInputs.inputProvince.value = addressData.bairro;
    eventInputs.inputCity.value = addressData.localidade;
    eventInputs.inputState.value = addressData.uf;
  });
};

export default SetAddress;
