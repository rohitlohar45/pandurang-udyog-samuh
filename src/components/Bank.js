import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column", // Align items vertically
    gap: "20px",
    textAlign: "center",
    marginTop: "5%",
  },
  title: {
    textAlign: "center", // Center the text
  },
  imagesRow: {
    display: "flex",
    justifyContent: "center", // Center items horizontally
    gap: "20px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "8px",
    padding: "30px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

const Bank = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Bank Approved
      </Typography>
      <div className={classes.imagesRow}>
        <div className={classes.imageContainer}>
          <img
            src="../../assets/img/bank/CSB.jpg"
            alt="bank1"
            className={classes.image}
          />
        </div>
        <div className={classes.imageContainer}>
          <img
            src="../../assets/img/bank/CBI.jpg"
            alt="bank2"
            className={classes.image}
          />
        </div>
      </div>
      <div className={classes.imagesRow}>
        <div className={classes.imageContainer}>
          <img
            src="../../assets/img/bank/hdfc.jpg"
            alt="bank3"
            className={classes.image}
          />
        </div>
        <div className={classes.imageContainer}>
          <img
            src="../../assets/img/bank/IDBI.jpg"
            alt="bank4"
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Bank;
