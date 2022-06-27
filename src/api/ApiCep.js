const ApiCep = async (postalCode) => {
  let url = "https://viacep.com.br/ws/" + postalCode + "/json/";
  const response = await fetch(url, { method: "GET" });
  const result = await response.json();
  return result;
};

export default ApiCep;
