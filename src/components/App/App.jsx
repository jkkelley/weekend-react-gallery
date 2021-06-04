import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList"


function App() {
  const [galleryList, setGalleryList] = useState([]);

  // Axios, we need a GET
  const fetchGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        // We should see our data in the console
        console.log('response from server', response.data);
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
      <GalleryList gallery={galleryList} />
    </div>
  );
}

export default App;
