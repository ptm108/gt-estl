import { client } from "../../../api/Client";

export const getEmployees = (params) => {
  return client.get("/users", { params: params });
};
