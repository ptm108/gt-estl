import { Typography } from "@material-ui/core";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div style={{ margin: "8px 0" }}>
      <Typography variant="h1" style={{ fontWeight: 500 }} color="textSecondary">
        {title}
      </Typography>
    </div>
  );
};

PageTitle.defaultProps = {
  title: "Title",
};

export default PageTitle;
