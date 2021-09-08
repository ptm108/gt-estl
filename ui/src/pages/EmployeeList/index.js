import React, { useState, useEffect } from "react";
import { getEmployees } from "./api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees({ minSalary: 0, maxSalary: 4000, offset: 0, limit: 10, sort: "+id" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <React.Fragment>EMPLoYEE</React.Fragment>;
};

export default EmployeeList;
