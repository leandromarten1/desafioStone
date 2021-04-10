import axios from 'axios';

const BASE_URL = 'http://gateway.marvel.com/v1/public';
const PUBLIC_KEY = '2da641e94366cc8eb9201c7c2751fdd1';
// const PRIVATE_KEY = '3f61c044adfe5d57d4d3481acaaec769cbd7ffb2';
const TIMESTAMP = '1618063849';
const MD5 = 'a1f91fd4876d02325fefad6c54c53291';
const authParams = `ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${MD5}`;

export const fetchResponse = (resource, authentication) => {
  console.log('Calling: ', `${BASE_URL}/${resource}?${authentication}`);
  return axios
    .get(`${BASE_URL}/${resource}?${authentication}`)
    .then((response) => response)
    .catch((error) => console.log(error));
};

export const fetchByType = (resource) => {
  return fetchResponse(`${resource}`, authParams).then(
    ({ data: { data } }) => data,
  );
};

export const fetchById = (resource, id) => {
  return fetchResponse(`${resource}/${id}`, authParams).then(
    ({ data: { data } }) => data,
  );
};
