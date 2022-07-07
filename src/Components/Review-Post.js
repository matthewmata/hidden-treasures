import Item from "./Item";

const ReviewPost = ({
  setActiveIndex,
  postInfo,
  selectedImages,
  handleFormSubmit,
  handleFeaturedImage,
}) => {

  const images = selectedImages.length >= 1
    ? selectedImages
    : [
        {
          preview:
            "https://hidden-treasures-images.s3.amazonaws.com/no-image.jpeg",
        },
      ];


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
        selectedImages={images}
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
