import Dropzone from "./Dropzone";

const AddPictures = ({ setActiveIndex, selectedImages, setSelectedImages }) => {
  return (
    <div className="new-post-container">
      <div className="columns">
        <h2 className="new-post-title column">Add Pictures</h2>
        <div className="buttons next-buttons next-buttons-top">
          <div className="previous-button">
            <a
              className="button is-light progress-button"
              onClick={() => setActiveIndex(1)}
              href={() => false}
            >
              Previous
            </a>
          </div>
          <a
            className="button is-primary progress-button"
            onClick={() => setActiveIndex(3)}
            href={() => false}
          >
            <strong>Next Step</strong>
          </a>
        </div>
      </div>

      <div>This posting has {selectedImages.length} images, of a maximum 8</div>
      <div>Upload best image first - it will be featured.</div>

      <Dropzone
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />

      <div className="buttons next-buttons next-buttons-bottom">
        <div className="previous-button">
          <a
            className="button is-light progress-button"
            onClick={() => setActiveIndex(1)}
            href={() => false}
          >
            Previous
          </a>
        </div>
        <a
          className="button is-primary progress-button"
          onClick={() => setActiveIndex(3)}
          href={() => false}
        >
          <strong>Next Step</strong>
        </a>
      </div>
    </div>
  );
};

export default AddPictures;
