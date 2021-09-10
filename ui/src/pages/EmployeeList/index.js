import { Button, makeStyles } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import PageTitle from "../../components/PageTitle";
import { getEmployees } from "./api";
import EmployeeCard from "./components/EmployeeCard";
import Options from "./components/Options";

const useStyles = makeStyles((theme) => ({
  errorRoot: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const EmployeeList = () => {
  const classes = useStyles();

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

  const fetchEmployees = () => {
    getEmployees({ ...page, ...salaryRange, sort: sort })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEmployees();
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
      {employees.length > 0 ? (
        employees.map((e) => <EmployeeCard key={e.id} employee={e} />)
      ) : (
        <div className={classes.errorRoot}>
          <div>No records found</div>
          <Button component={NavLink} to="/upload-csv" variant="contained" className={classes.button}>
            Upload .csv file
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default EmployeeList;
