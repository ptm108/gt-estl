import React, { Fragment, useState } from "react";
import { Button, Card, CardContent, Chip, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { useSnackbar } from "notistack";

import PageTitle from "../../components/PageTitle";
import { uploadCSV } from "./api";

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

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const config = {
    onUploadProgress: (progressEvent) => {
      setProgress((progressEvent.loaded / progressEvent.total) * 100);
    },
  };

  const handleUploadFile = async () => {
    setUploading(true);
    await uploadCSV(files[0].file, config)
      .then((res) =>
        enqueueSnackbar("Successfully uploaded.", {
          variant: "success",
        })
      )
      .catch((err) => {
        enqueueSnackbar(`Error: ${err.response.data}`, {
          variant: "error",
        });
      });
    await sleep(1000);
    setUploading(false);
    setFiles([]);
    setProgress(0);
  };

  return (
    <Fragment>
      <PageTitle title="Upload CSV" />
      <Card className={classes.cardRoot}>
        <CardContent>
          {files.length > 0 ? (
            <div className={classes.fileRoot}>
              {uploading && <LinearProgress variant="determinate" value={progress} />}
              <Chip label={files[0].file.name} onDelete={() => setFiles([])} color="secondary" />
              <Button className={classes.button} variant="contained" onClick={handleUploadFile} disabled={uploading}>
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
