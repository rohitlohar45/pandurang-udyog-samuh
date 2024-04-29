import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "./Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center",
    title: {
      // marginBottom: "5%",
    },
  },
});

const cardsData = [
  { icon: "favorite", text: "Card 1" },
  { icon: "star", text: "Card 2" },
  { icon: "bookmark", text: "Card 3" },
  { icon: "favorite", text: "Card 4" },
  { icon: "star", text: "Card 5" },
  { icon: "bookmark", text: "Card 6" },
  { icon: "favorite", text: "Card 7" },
  { icon: "star", text: "Card 8" },
];

const Amenities = () => {
  const classes = useStyles();

  // Group the cards into chunks of four for rendering
  const chunkedCards = [cardsData.slice(0, 4), cardsData.slice(4, 8)];

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Exclusive Amenities
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {chunkedCards.map((chunk, chunkIndex) => (
          <React.Fragment key={chunkIndex}>
            {chunk.map((card, cardIndex) => (
              <Grid item xs={3} key={cardIndex} justifyContent="center">
                <Card icon={card.icon} text={card.text} />
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Amenities;
