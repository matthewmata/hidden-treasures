import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ selectedImages, setSelectedImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setSelectedImages([
        ...selectedImages,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [selectedImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const deletePicture = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    // console.log(selectedImages);
  };

  return (
    <div>
      <section className="hero is-light dropzone-hero">
        {selectedImages.length < 9 ? (
          <div className="hero-body has-text-centered" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="subtitle">Drop the files here ...</p>
            ) : (
              <p className="subtitle">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        ) : (
          <div className="hero-body has-text-centered">
            <p className="subtitle">
              You reached the maxiumum amount of pictures
            </p>
          </div>
        )}
      </section>

      <div className="columns images-container">
        {selectedImages?.map((file, index) => (
          <div className="column has-text-right item-container" key={index}>
            <button
              className="delete is-medium"
              onClick={() => deletePicture(index)}
            ></button>
            <img
              className="item-image"
              src={file.preview}
              alt={`item ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropzone;
