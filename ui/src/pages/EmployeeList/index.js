import React, { Fragment, useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";

import { getEmployees } from "./api";
import EmployeeCard from "./components/EmployeeCard";
import Options from "./components/Options";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const [sort, setSort] = useState("+id");
  const [page, setPage] = useState({
    offset: 0,
    limit: 30,
  });

  useEffect(() => {
    getEmployees({ minSalary: 0, maxSalary: 4000, offset: page.offset, limit: page.limit, sort: sort })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  }, [sort, page]);

  return (
    <Fragment>
      <PageTitle title="Your Employees" />
      <Options employees={employees} sort={sort} setSort={setSort} page={page} setPage={setPage} />
      {employees ? employees.map((e) => <EmployeeCard key={e.id} employee={e} />) : <div>No records found</div>}
    </Fragment>
  );
};

export default EmployeeList;
