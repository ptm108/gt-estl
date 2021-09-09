import React from "react";
import { Button, ButtonGroup, FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  optionsRoot: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
    margin: theme.spacing(4, 0, 2),
  },
  buttonGroup: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  select: {
    background: "#FFF",
  },
  formControl: {
    margin: theme.spacing(0, 1),
    minWidth: 150,
    maxHeight: 50,
  },
}));

const Options = ({ employees, sort, setSort, page, setPage }) => {
  const classes = useStyles();

  const prevButtonDisabled = page.offset === 0;
  const nextButtonDisabled = employees.length < 30;

  const handleNextPage = () => {
    setPage({
      offset: page.limit,
      limit: page.limit + 30,
    });
  };

  const handlePrevPage = () => {
    setPage({
      offset: page.offset - 30 < 0 ? 0 : page.offset - 30,
      limit: page.offset - 30 < 0 ? 30 : page.offset,
    });
  };

  return (
    <div className={classes.optionsRoot}>
      <FormControl margin="dense" variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
        <Select
          classes={{ outlined: classes.select }}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Sort"
        >
          <MenuItem value="+id">ID Asc</MenuItem>
          <MenuItem value="-id">ID Desc</MenuItem>
          <MenuItem value="+name">Name Asc</MenuItem>
          <MenuItem value="-name">Name Desc</MenuItem>
          <MenuItem value="+login">Login Asc</MenuItem>
          <MenuItem value="-login">Login Desc</MenuItem>
          <MenuItem value="+salary">Salary Asc</MenuItem>
          <MenuItem value="-salary">Salary Desc</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup classes={{ grouped: classes.buttonGroup }} disableElevation variant="contained">
        <Button onClick={handlePrevPage} disabled={prevButtonDisabled}>
          <NavigateBefore />
        </Button>
        <Button onClick={handleNextPage} disabled={nextButtonDisabled}>
          <NavigateNext />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Options;
