import React, { Fragment } from "react";
import { Description } from "@material-ui/icons";
import { DropzoneAreaBase } from "material-ui-dropzone";

import PageTitle from "../../components/PageTitle";

const CSVUpload = () => {
  return (
    <Fragment>
      <PageTitle title="Upload CSV" />
      <div style={{ margin: "8px 0" }}>
        <DropzoneAreaBase
          acceptedFiles={[".csv"]}
          Icon={Description}
          filesLimit={1}
          dropzoneText="Drag and drop the .csv file here or click"
          onChange={(files) => console.log("Files:", files)}
          onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
        />
      </div>
    </Fragment>
  );
};

export default CSVUpload;
