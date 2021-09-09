import React from "react";
import { Button, ButtonGroup, FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  optionsRoot: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
  buttonGroup: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  formControl: {
    margin: theme.spacing(0, 1),
    minWidth: 120,
    maxHeight: 50,
  },
}));

const Options = () => {
  const classes = useStyles();

  return (
    <div className={classes.optionsRoot}>
      <FormControl margin="dense" variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={age}
          // onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup classes={{ grouped: classes.buttonGroup }} disableElevation variant="contained">
        <Button>
          <NavigateBefore />
        </Button>
        <Button>
          <NavigateNext />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Options;
