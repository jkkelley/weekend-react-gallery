import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";

function FavoriteButton({ gallery, fetchGallery }) {

  // set favorite button state to false
  const [favoriteButton, setFavoriteButton] = useState(false);

  // onClick function to handle favoriteButton state with server
  const handleFavoriteButton = () => {

    /* 
     * We start with false state on favoriteButton, 
     * we send the opposite state to the server and set 
     * the state to true after our response from the server
     */

    let data = !favoriteButton;

    axios
      .put(`/gallery/favorite_button/${gallery.id}`, { data })
      .then((response) => {
        console.log(response);
        fetchGallery();
        setFavoriteButton(!favoriteButton);
      })
      .catch((error) => {
        console.log(`We have an... ${error}`);
      });
  };

  return (
    <>
      {favoriteButton && (
        <IconButton
          onClick={handleFavoriteButton}
          aria-label="delete"
          color="primary"
        >
          <StarIcon />
        </IconButton>
      )}
      {!favoriteButton && (
        <IconButton
          onClick={handleFavoriteButton}
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
