import React, { Fragment, useState, useEffect } from "react";
import { Button, makeStyles, Hidden, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Add } from "@material-ui/icons";

import PageTitle from "../../components/PageTitle";
import { deleteEmployee, getEmployees } from "./api";
import EmployeeCard from "./components/EmployeeCard";
import Options from "./components/Options";
import DeleteModal from "./components/DeleteModal";

const useStyles = makeStyles((theme) => ({
  errorRoot: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    textTransform: "none",
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  extendPageTitle: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
}));

const EmployeeList = () => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const [sort, setSort] = useState("+id");
  const [page, setPage] = useState({
    offset: 0,
    limit: 30,
  });
  const [salaryRange, setSalaryRange] = useState({
    minSalary: 0,
    maxSalary: 4000,
  });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const fetchEmployees = () => {
    getEmployees({ ...page, ...salaryRange, sort: sort })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteEmployee = () => {
    deleteEmployee(selectedEmployee.id)
      .then((res) => {
        enqueueSnackbar("Employee deleted.", {
          variant: "success",
        });
        fetchEmployees();
      })
      .catch((err) => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      })
      .finally(() => {
        setDeleteModalOpen(false);
        setSelectedEmployee({});
      });
  };

  useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line
  }, [sort, page, salaryRange]);

  return (
    <Fragment>
      <div className={classes.extendPageTitle}>
        <PageTitle title="Employees" />
        <Hidden smDown>
          <Button size="small" className={classes.button} startIcon={<Add />} style={{ padding: 8, height: 40 }}>
            Create Employee
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton size="small" className={classes.button}>
            <Add />
          </IconButton>
        </Hidden>
      </div>
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
        employees.map((e) => (
          <EmployeeCard
            key={e.id}
            employee={e}
            setSelectedEmployee={setSelectedEmployee}
            setDeleteModalOpen={setDeleteModalOpen}
          />
        ))
      ) : (
        <div className={classes.errorRoot}>
          <div>No records found</div>
          <Button component={NavLink} to="/upload-csv" variant="contained" className={classes.button}>
            Upload .csv file
          </Button>
        </div>
      )}
      <DeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} handleDeleteEmployee={handleDeleteEmployee} />
    </Fragment>
  );
};

export default EmployeeList;
