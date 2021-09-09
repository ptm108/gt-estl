import React from "react";
import { Typography } from "@material-ui/core";

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h1" style={{ fontWeight: 600 }} color="textSecondary">
      {title}
    </Typography>
  );
};

PageTitle.defaultProps = {
  title: "Title",
};

export default PageTitle;
