import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = '2da641e94366cc8eb9201c7c2751fdd1';
// const PRIVATE_KEY = '3f61c044adfe5d57d4d3481acaaec769cbd7ffb2';
const TIMESTAMP = '1618063849';
const MD5 = 'a1f91fd4876d02325fefad6c54c53291';
const authParams = `ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${MD5}`;

export const fetchResponseByType = async (type) => {
  axios.get(`${BASE_URL}/${type}?$${authParams}`);
  console.log(`Chamando: ${BASE_URL}/${type}?${authParams}`);
};
