import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, DialogActions, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    textTransform: "none",
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.dark}`,
  },
}));

const DeleteModal = ({ open, setOpen }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogContent>This action cannot be reversed.</DialogContent>
      <DialogActions>
        <Button style={{ textTransform: "none" }}>Cancel</Button>
        <Button className={classes.deleteButton}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
