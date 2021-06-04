import { useState } from "react";
import axios from "axios";

function GalleryItem({ gallery, fetchGallery }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleFlip = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
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
    <div className="">
      {isHidden ? (
        <p onClick={handleFlip}>{gallery.description}</p>
      ) : (
        <img onClick={handleFlip} src={gallery.path} />
      )}

      <button onClick={handleUpLikes}>love it!</button>
      <p>{gallery.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
