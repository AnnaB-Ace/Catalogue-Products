import axios from "axios";

export const getProducts = async () => {
  return await axios({
    method: "get",
    url: `https://funko-app.herokuapp.com/api/events`,
  });
};

export const createProdutsApi = async (data) => {
  return await axios({
    method: "post",
    url: `https://funko-app.herokuapp.com/api/events`,
    data,
  });
};

export const editProductApi = async (id) => {
  return await axios({
    method: "put",
    url: `https://funko-app.herokuapp.com/api/events/${id}`,
  });
};

export const deleteProdutsApi = async (id) => {
  return await axios({
    method: "delete",
    url: `https://funko-app.herokuapp.com/api/events/${id}`,
  });
};
