import { client } from "../../../api/Client";

export const getEmployees = (params) => {
  return client.get("/users", { params: params });
};

export const deleteEmployee = (id) => {
  return client.delete(`/users/${id}`);
};
