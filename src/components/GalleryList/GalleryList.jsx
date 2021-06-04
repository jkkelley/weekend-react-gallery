import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList({ gallery, fetchGallery }) {
  return (
    <>
      <div className="gallery-pictures-container">
        {gallery.map((gallery) => (
          <GalleryItem
            key={gallery.id}
            gallery={gallery}
            fetchGallery={fetchGallery}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryList;
