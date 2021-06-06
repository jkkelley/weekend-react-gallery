import { useState } from "react";
import axios from "axios";
import GalleryListGet from "../GalleryListGet/GalleryListGet"

function AddGalleryImageForm({ fetchGallery }) {

  // Need react to hold onto some states for us.
  const [absolutePathInput, setAbsolutePathInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  // Function to handle our Submit and to POST
  const handleSubmit = (event) => {
    event.preventDefault();

    // Need an Object of data to send to the server
    const newGalleryImage = {
      path: absolutePathInput,
      description: descriptionInput,
    };

    // Axios shouldn't be too busy, hopefully...
    axios
      .post("/gallery", newGalleryImage)
      .then((response) => {
        // Brought fetchGallery along for the ride, Thanks Dad.
        // Re-Draw the new data we sent to the server.
        fetchGallery();
        setAbsolutePathInput("");
        setDescriptionInput("");
      })
      .catch((error) => {
        console.log(`Sorry, There seems to be an... ${error}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-heading-container">
        <h3>Add To the Gallery</h3>
        <h4>Don't forget to push those "love it!" buttons!</h4>
      </div>
      <input
        value={absolutePathInput}
        onChange={(event) => setAbsolutePathInput(event.target.value)}
        placeholder="Valid URL"
      />
      <input
        maxLength="199"
        onChange={(event) => setDescriptionInput(event.target.value)}
        placeholder="Description"
        value={descriptionInput}
      />
      <button type="submit">Add To Gallery</button>
      <GalleryListGet fetchGallery={fetchGallery} />
    </form>
  );
}

export default AddGalleryImageForm;
