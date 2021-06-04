import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  // Axios, we need a GET
  const fetchGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        // We should see our data in the console
        console.log(response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log(`Something went wrong.... ${error}`);
      });
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of the Unknown</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList gallery={galleryList} />
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
