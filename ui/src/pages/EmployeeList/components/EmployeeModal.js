import React, { Fragment } from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, DialogActions, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  dialogRoot: {
    width: 400,
    maxWidth: "80%",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const EmployeeModal = ({ edit, open, setOpen, selectedEmployee, setSelectedEmployee, handleSubmit }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  if (!selectedEmployee) {
    return <Fragment />;
  }

  return (
    <Dialog classes={{ paper: classes.dialogRoot }} open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{edit ? `Edit Employee: #${selectedEmployee.id}` : "Create Employee"}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            label="Login"
            name="login"
            variant="outlined"
            fullWidth
            value={selectedEmployee.login}
            onChange={handleChange}
          />
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={selectedEmployee.name}
            onChange={handleChange}
          />
          <TextField
            label="Salary"
            name="salary"
            variant="outlined"
            fullWidth
            type="number"
            inputProps={{
              min: 0,
              step: 0.01,
            }}
            value={selectedEmployee.salary}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.handleEdit} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className={classes.handleEdit} color="primary" type="submit">
            {edit ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EmployeeModal;
