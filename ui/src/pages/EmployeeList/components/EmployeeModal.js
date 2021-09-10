import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, DialogActions, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    textTransform: "none",
    color: theme.palette.primary.dark,
  },
}));

const EmployeeModal = ({ open, setOpen, employee, setEmployee, edit }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{edit ? "Edit Employee" : "Create Employee"}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button style={{ textTransform: "none" }} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button className={classes.deleteButton}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeModal;
