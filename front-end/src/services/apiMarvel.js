import axios from 'axios';

const BASE_URL = 'http://gateway.marvel.com/v1/public';
const PUBLIC_KEY = '2da641e94366cc8eb9201c7c2751fdd1';
// const PRIVATE_KEY = '3f61c044adfe5d57d4d3481acaaec769cbd7ffb2';
const TIMESTAMP = '1618063849';
const MD5 = 'a1f91fd4876d02325fefad6c54c53291';

export const fetchResponseByType = (type) => {
  return axios.get(
    `${BASE_URL}/${type}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${MD5}&limit=12`,
  );
};
