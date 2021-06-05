import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList({ gallery, fetchGallery }) {
  return (

      <div className="gallery-pictures-container">
        {gallery.map((gallery) => (
          <GalleryItem
            fetchGallery={fetchGallery}
            gallery={gallery}
            key={gallery.id}
          />
        ))}
      </div>

  );
}

export default GalleryList;
