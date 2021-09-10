import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, DialogActions, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    textTransform: "none",
    color: theme.palette.error.dark,
  },
}));

const DeleteModal = ({ open, setOpen, handleDeleteEmployee }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogContent>This action cannot be reversed.</DialogContent>
      <DialogActions>
        <Button style={{ textTransform: "none" }} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button className={classes.deleteButton} onClick={handleDeleteEmployee}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
