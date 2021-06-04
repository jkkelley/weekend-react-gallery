import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, fetchGallery }) {
  return (
    <>
      <div className="gallery-picture-containers">
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
