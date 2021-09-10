import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  optionsRoot: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
  buttonGroup: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    padding: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  select: {
    background: "#FFF",
  },
  formControl: {
    minWidth: 150,
    maxHeight: 50,
  },
  cardRoot: {
    padding: theme.spacing(1.5),
  },
  cardContent: {
    paddingBottom: 0,
    padding: theme.spacing(0.5, 1),
  },
  salaryRoot: {
    display: "flex",
    gap: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
  filterRoot: {
    margin: theme.spacing(0, 2, 2),
    display: "flex",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Options = ({ employees, sort, setSort, page, setPage, salaryRange, setSalaryRange }) => {
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

  const filters = (
    <div className={classes.filterRoot}>
      <FormControl margin="dense" variant="outlined" className={classes.formControl}>
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          classes={{ outlined: classes.select }}
          labelId="sort-label"
          id="sort-select"
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
      <div className={classes.salaryRoot}>
        <TextField
          margin="dense"
          label="Min Salary"
          variant="outlined"
          value={salaryRange.minSalary}
          onChange={(e) => setSalaryRange({ ...salaryRange, minSalary: e.target.value })}
        />
        -
        <TextField
          margin="dense"
          label="Max Salary"
          variant="outlined"
          value={salaryRange.maxSalary}
          onChange={(e) => setSalaryRange({ ...salaryRange, maxSalary: e.target.value })}
        />
      </div>
    </div>
  );

  return (
    <div className={classes.optionsRoot}>
      <Card>
        <CardHeader title="Filters" />
        {filters}
      </Card>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup classes={{ grouped: classes.buttonGroup }} disableElevation variant="contained">
          <Button onClick={handlePrevPage} disabled={prevButtonDisabled}>
            <NavigateBefore />
          </Button>
          <Button onClick={handleNextPage} disabled={nextButtonDisabled}>
            <NavigateNext />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Options;
