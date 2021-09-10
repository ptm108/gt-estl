import React, { Fragment, useState } from "react";
import { Button, Card, CardContent, Chip, makeStyles, Typography } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import { DropzoneAreaBase } from "material-ui-dropzone";

import PageTitle from "../../components/PageTitle";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: theme.spacing(1, 0),
  },
  fileRoot: {
    display: "flex",
    flexDirection: "column",
    width: 200,
    gap: theme.spacing(1.5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    padding: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const CSVUpload = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  console.log(files);

  return (
    <Fragment>
      <PageTitle title="Upload CSV" />
      <Card className={classes.cardRoot}>
        <CardContent>
          {files.length > 0 ? (
            <div className={classes.fileRoot}>
              <Chip label={files[0].file.name} onDelete={() => setFiles([])} color="secondary" />
              <Button className={classes.button} variant="contained">
                Upload
              </Button>
            </div>
          ) : (
            <DropzoneAreaBase
              acceptedFiles={[".csv", "text/csv"]}
              Icon={Description}
              filesLimit={1}
              dropzoneText={
                <Typography variant="h5" color="textSecondary" style={{}}>
                  Drag and drop the .csv file here or click
                </Typography>
              }
              fileObjects={files}
              onAdd={(files) => setFiles(files)}
              onDelete={(files) => setFiles(files)}
            />
          )}
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CSVUpload;
