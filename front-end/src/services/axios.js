import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3001/',
});

const processoEspecifico = async (processo) => {
  const result = await axiosApi
    .get(`consulta/${processo}`)
    .catch((error) => error.response);
  return result;
};

export default processoEspecifico;
