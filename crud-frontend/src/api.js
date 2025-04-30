const request = (method, body, id) => {
  const url = id ? `http://localhost:3001/users/${id}` : "http://localhost:3001/users";
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    },
    body: body
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucesso:", data);
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      return [];
    });
}

const create = (body) => {
  return request("POST", body);
}

const read = () => {
 return request("GET", null);
}

const search = (id) => {
  return request("GET", null, id);
}

const update = (body, id) => {
  return request("PUT", body, id);
}

const remove = (id) => {
  return request("DELETE", null, id);
}

export { create, read, search, update, remove };
