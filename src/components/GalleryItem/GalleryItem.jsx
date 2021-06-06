import "./GalleryItem.css";
import { useState } from "react";
import axios from "axios";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function GalleryItem({ gallery, fetchGallery }) {
  const [isHidden, setIsHidden] = useState(false);

  // We want to be able to flip between states
  const handleFlip = () => {
    // NOT FALSE === true
    if (isHidden) {
      // set State to true
      setIsHidden(false);
    } else {
      // set State to false
      setIsHidden(true);
    }
  };

  // Everybody's favorite section, Function to handle all those likes.
  const handleUpLikes = () => {
    console.log(gallery);

    axios
      .put(`/gallery/like/${gallery.id}`)
      .then((response) => {
        console.log(response);
        fetchGallery();
      })
      .catch((error) => {
        `Uh Oh, we have an... ${error}`;
      });
  };

  // Everybody's least favorite section, Function to handle DELETION!
  const handleDelete = () => {
    console.log(gallery);
    /* Let me just say, Props has to be one of the coolest method's
     * that I've encountered in my short time coding. Bring whatever you
     * want for a ride down the pipe and it's at your disposal. Way better
     * than jQuery for handling UPDATE and DELETE
     */

    // Axios, we gotta boot an image
    axios
      .delete(`/gallery/${gallery.id}`)
      .then((response) => {
        console.log(`The SERVER says... ${response.data}`);
        // Re-draw want we need please react
        fetchGallery();
      })
      .catch((error) => {
        console.log(`Sorry, DELETION isn't possible... ${error}`);
      });
  };

  return (
    <div className="picture-container">
      {isHidden ? (
        <p className="pic-container" onClick={handleFlip}>
          {gallery.description}
        </p>
      ) : (
        <img
          className="img-container"
          onClick={handleFlip}
          src={gallery.path}
        />
      )}
      <FavoriteButton fetchGallery={fetchGallery} />
      <div>
        <button className="love-it-button" onClick={handleUpLikes}>
          love it!
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <p className="love-it-p-tag">{gallery.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
