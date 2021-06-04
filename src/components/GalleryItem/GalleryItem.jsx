import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ gallery, fetchGallery }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleFlip = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

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

      <button className="love-it-button" onClick={handleUpLikes}>
        love it!
      </button>
      <p className="love-it-p-tag">{gallery.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
