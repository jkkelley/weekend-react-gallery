import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";

function FavoriteButton() {
  // set favorite button state to false
  const [favoriteButton, setFavoriteButton] = useState(false);
  return (
    <>
      {favoriteButton && (
        <IconButton
          onClick={() => {
            setFavoriteButton(!favoriteButton);
          }}
          aria-label="delete"
          color="primary"
        >
          <StarIcon />
        </IconButton>
      )}
      {!favoriteButton && (
        <IconButton
          onClick={() => {
            setFavoriteButton(!favoriteButton);
          }}
          aria-label="delete"
          color="primary"
        >
          <StarBorderIcon />
        </IconButton>
      )}
    </>
  );
}

export default FavoriteButton;
