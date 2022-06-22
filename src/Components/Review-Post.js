import Item from "./Item"

const ReviewPost = ({
  setActiveIndex,
  postInfo,
  selectedImages,
  handleFormSubmit,
  handleFeaturedImage,
}) => {
  return (
    <div className="new-post-container">
      <div className="columns">
        <div className="column">
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(0)}
          >
            Edit Category
          </button>
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(1)}
          >
            Edit Information
          </button>
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(2)}
          >
            Edit Pictures
          </button>
        </div>
        <div className="buttons next-buttons">
          <a
            className="button is-primary progress-button"
            href={() => false}
            onClick={() => handleFormSubmit(selectedImages)}
          >
            <strong>Publish</strong>
          </a>
        </div>
      </div>

      <section className="hero unpublished-hero">
        <div className="hero-body unpublished-hero-body has-text-centered">
          <p className="subtitle">Below is your unpublished draft</p>
        </div>
      </section>

      <Item
        postInfo={postInfo}
        selectedImages={selectedImages}
        handleFeaturedImage={handleFeaturedImage}
      />

      <div className="columns">
        <div className="column">
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(0)}
          >
            Edit Category
          </button>
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(1)}
          >
            Edit Information
          </button>
          <button
            className="button edit-button is-responsive"
            onClick={() => setActiveIndex(2)}
          >
            Edit Pictures
          </button>
        </div>

        <div className="buttons next-buttons">
          <a
            className="button is-primary progress-button"
            href={() => false}
            onClick={() => handleFormSubmit(selectedImages)}
          >
            <strong>Publish</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewPost;
