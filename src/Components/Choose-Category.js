import { useForm } from "react-hook-form";

const ChooseCategory = ({ setActiveIndex, postInfo, handleChange }) => {
  const categories = [
    "appliances",
    "bikes",
    "boats",
    "books",
    "cars & trucks",
    "cell phones",
    "collectibles",
    "electronics",
    "furniture",
    "jewelry",
    "motorcycles",
    "musical intruments",
    "toys & games",
    "videogames",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setActiveIndex(1)
  };

  return (
    <div className="new-post-container">
      <div className="columns">
        <h2 className="new-post-title column">Please choose a category:</h2>
        <div className="buttons next-buttons next-buttons-top">
          <a
            className="button is-primary progress-button"
            onClick={handleSubmit(onSubmit)}
            href={() => false}
          >
            <strong>Next Step</strong>
          </a>
        </div>
      </div>
      <div>
        <strong className="require-popup">{errors.category_id?.message}</strong>
      </div>
      {categories.map((element, index) => (
        <div className="category-container" key={index}>
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value={element}
              checked={postInfo.category === element}
              {...register("category", {
                required: " * Required *",
              })}
              onChange={handleChange("category")}
            />
            {" " + element}
          </label>
        </div>
      ))}
      <div className="buttons next-buttons next-buttons-bottom">
        <a
          className="button is-primary progress-button"
          href={() => false}
          onClick={handleSubmit(onSubmit)}
        >
          <strong>Next Step</strong>
        </a>
      </div>
    </div>
  );
};

export default ChooseCategory;
