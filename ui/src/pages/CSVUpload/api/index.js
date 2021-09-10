import { client } from "../../../api/Client";

export const uploadCSV = (csvFile) => {
  let formData = new FormData();
  formData.append("file", csvFile);
  
  return client.post("/users/upload", formData);
};
