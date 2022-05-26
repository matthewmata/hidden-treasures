import { useState } from "react";

const Item = ({ postInfo, selectedImages }) => {
  const [images, setImages] = useState([...selectedImages]);

  const handleFeaturedImage = (index) => {
      const nonFeaturedImages = images.slice(1);
      const newFeaturedImage = nonFeaturedImages.splice(index, 1);
      setImages([...newFeaturedImage, images[0], ...nonFeaturedImages]);
  }

  const separator = (numb) => {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  return (
    <div className="">
      <h2 className="new-post-title">
        <strong>{`${postInfo.title} - $${separator(postInfo.price)}`}</strong>
      </h2>
      <div className="columns">
        <div className="column">
          <img alt="Featured Item" src={images[0]?.preview} />
          <div className="columns images-container">
            {images.slice(1)?.map((file, index) => (
              <div
                className="column has-text-right item-container"
                onClick={() => handleFeaturedImage(index)}
                key={index}
              >
                <img
                  className="item-image"
                  src={file?.preview}
                  alt={`item ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <p className="post-text">{postInfo.description}</p>

          <div className="button item-tag">
            Make / Manufacturer: <strong>{postInfo?.make}</strong>
          </div>
          <div className="button item-tag">
            Model Name / Number: <strong>{postInfo?.model}</strong>
          </div>
          <div className="button item-tag">
            Size Dimensions: <strong>{postInfo?.size}</strong>
          </div>
          <div className="button item-tag">
            Condition: <strong>{postInfo?.condition_description}</strong>
          </div>
          <div className="button item-tag">
            Contact Name: <strong>{postInfo?.contact_name}</strong>
          </div>
          <div className="button item-tag">
            Email: <strong>{postInfo?.email}</strong>
          </div>
          <div className="button item-tag">
            Phone Number: <strong>{postInfo?.phone_number}</strong>
          </div>
          <div className="button item-tag">
            Postal Code: <strong>{postInfo?.postal_code}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
