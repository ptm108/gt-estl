import React, { Fragment, useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";

import { getEmployees } from "./api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees({ minSalary: 0, maxSalary: 4000, offset: 0, limit: 10, sort: "+id" })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(employees);

  return (
    <Fragment>
      <PageTitle title="Your Employees" />
    </Fragment>
  );
};

export default EmployeeList;
