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
  const [salaryRange, setSalaryRange] = useState({
    minSalary: 0,
    maxSalary: 4000,
  });

  useEffect(() => {
    getEmployees({ ...page, ...salaryRange, sort: sort })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [sort, page, salaryRange]);

  return (
    <Fragment>
      <PageTitle title="Employees" />
      <Options
        employees={employees}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />
      {employees ? employees.map((e) => <EmployeeCard key={e.id} employee={e} />) : <div>No records found</div>}
    </Fragment>
  );
};

export default EmployeeList;
