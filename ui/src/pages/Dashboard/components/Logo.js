import React from "react";
import { Typography, useTheme } from "@material-ui/core";

const Logo = ({ mobile }) => {
  const theme = useTheme();

  if (mobile) {
    return <img src="/logo-192.png" style={{ maxWidth: 100, margin: "40px auto" }} alt="Employees" />;
  }

  return (
    <div
      style={{
        width: 200,
        padding: theme.spacing(2),
        display: "flex",
        margin: "40px 0",
        gap: theme.spacing(1),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/logo-512.png" style={{ width: 40, height: 40 }} alt="Employees" />
      <Typography variant="h6" style={{ color: theme.palette.primary.dark }}>
        Employees
      </Typography>
    </div>
  );
};

Logo.defaultProps = {
  mobile: false,
};

export default Logo;
