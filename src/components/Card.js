import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core";
import { Favorite, Star, Bookmark } from "@material-ui/icons"; // Import Material-UI icons

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    padding: "20px 20px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  icon: {
    fontSize: 64,
  },
});

const Card = ({ icon, text }) => {
  const classes = useStyles();

  const renderIcon = () => {
    switch (icon) {
      case "favorite":
        return <Favorite className={classes.icon} />;
      case "star":
        return <Star className={classes.icon} />;
      case "bookmark":
        return <Bookmark className={classes.icon} />;
      default:
        return null;
    }
  };

  return (
    <MuiCard className={classes.card}>
      <CardContent>
        {renderIcon()}
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
