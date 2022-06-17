import { useForm } from "react-hook-form";

const AddInformation = ({
  setActiveIndex,
  postInfo,
  handleChange,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setActiveIndex(2);
  };

  return (
    <div className="new-post-container">
      <div className="columns">
        <h2 className="new-post-title column">Post Information</h2>
        <div className="buttons next-buttons next-buttons-top">
          <div className="previous-button">
            <a
              className="button progress-button"
              onClick={() => setActiveIndex(0)}
              href={() => false}
            >
              Previous
            </a>
          </div>
          <a
            className="button is-primary progress-button"
            onClick={handleSubmit(onSubmit)}
            href={() => false}
          >
            <strong>Next Step</strong>
          </a>
        </div>
      </div>

      <div className="columns">
        <div className="column is-two-fifths">
          <div className="field">
            <label className="label">
              Posting Title
              <strong className="require-popup">{errors.title?.message}</strong>
            </label>
            <input
              className="input"
              type="text"
              value={postInfo.title}
              {...register("title", {
                required: " * Required *",
              })}
              onChange={handleChange("title")}
            />
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field">
            <label className="label">Price</label>
            <input
              className="input"
              type="text"
              value={postInfo.price}
              placeholder="Price in $"
              onChange={handleChange("price")}
            />
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field">
            <label className="label">
              City
              <strong className="require-popup">
                {errors.city?.message}
              </strong>
            </label>
            <input
              className="input"
              {...register("city", {
                required: " * Required *",
              })}
              type="text"
              value={postInfo.city}
              onChange={handleChange("city")}
            />
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field">
            <label className="label">Postal Code</label>
            <input
              className="input"
              type="text"
              value={postInfo.postal_code}
              onChange={handleChange("postal_code")}
            />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <label className="label">
            Description
            <strong className="require-popup">
              {errors.description?.message}
            </strong>
          </label>
          <textarea
            className="textarea"
            {...register("description", {
              required: " * Required *",
            })}
            value={postInfo.description}
            onChange={handleChange("description")}
          ></textarea>
        </div>
      </div>

      <h2 className="new-post-title">Posting Details</h2>
      <div className="columns">
        <div className="column is-one-fourth">
          <label className="label">Make / Manufacturer</label>
          <input
            className="input"
            type="text"
            value={postInfo.make}
            onChange={handleChange("make")}
          />
        </div>
        <div className="column is-one-fourth">
          <label className="label">Model Name / Number</label>
          <input
            className="input"
            type="text"
            value={postInfo.model}
            onChange={handleChange("model")}
          />
        </div>
        <div className="column is-one-fourth">
          <label className="label">Size Dimensions</label>
          <input
            className="input"
            type="text"
            placeholder="L x W x H"
            value={postInfo.size}
            onChange={handleChange("size")}
          />
        </div>
        <div className="column">
          <label className="label">Condition</label>
          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  value={postInfo.condition_description}
                  onChange={handleChange("condition_description")}
                >
                  <option>-</option>
                  <option>New</option>
                  <option>Like New</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Salvage</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="new-post-title">Contact Info</h2>
      <div className="columns">
        <div className="column is-one-third">
          <label className="label">
            Contact Name
            <strong className="require-popup">
              {errors.contact_name?.message}
            </strong>
          </label>
          <input
            className="input"
            type="text"
            value={postInfo.contact_name}
            {...register("contact_name", {
              required: " * Required *",
            })}
            onChange={handleChange("contact_name")}
          />
        </div>
        <div className="column is-one-third">
          <label className="label">
            Email
            <strong className="require-popup">{errors.email?.message}</strong>
          </label>
          <input
            className="input"
            type="email"
            value={postInfo.email}
            {...register("email", {
              required: " * Required *",
            })}
            onChange={handleChange("email")}
          />
        </div>
        <div className="column is-one-third">
          <label className="label">Phone Number</label>
          <input
            className="input"
            type="text"
            value={postInfo.phone_number}
            onChange={handleChange("phone_number")}
          />
        </div>
      </div>

      <div className="buttons next-buttons next-buttons-bottom">
        <div className="previous-button">
          <a
            className="button progress-button"
            onClick={() => setActiveIndex(0)}
            href={() => false}
          >
            Previous
          </a>
        </div>
        <a
          className="button is-primary progress-button"
          onClick={handleSubmit(onSubmit)}
          href={() => false}
        >
          <strong>Next Step</strong>
        </a>
      </div>
    </div>
  );
};

export default AddInformation;
