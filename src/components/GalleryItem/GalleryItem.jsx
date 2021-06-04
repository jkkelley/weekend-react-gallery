function GalleryItem({ gallery }) {
  return (
    <>
      {/* <div> */}
      <img src={gallery.path} />
      <button>love it!</button>
      <p>{gallery.likes} people love this!</p>
      {/* </div> */}
    </>
  );
}

export default GalleryItem;
