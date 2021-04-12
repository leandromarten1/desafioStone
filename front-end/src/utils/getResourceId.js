const getResourceId = (uri, resource) => {
  const baseUrl = `http://gateway.marvel.com/v1/public/${resource}/`;
  return uri.replace(baseUrl, '');
};

export default getResourceId;
