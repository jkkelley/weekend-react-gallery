import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery }) {
  return (
    <>
      <div>
        {gallery.map((gallery) => (
          <GalleryItem key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </>
  );
}

export default GalleryList;
