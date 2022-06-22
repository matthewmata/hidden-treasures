import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ChooseCategory = ({ setActiveIndex, postInfo, handleChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const categoriesResponse = await fetch(
        `http://localhost:3000/api/categories`
      );
      const  categoriesJson = await categoriesResponse.json();
      setCategories(categoriesJson);
    }

    fetchData();
  }, []);

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
              value={element.category_id}
              {...register("category_id", {
                required: " * Required *",
              })}
              onChange={handleChange("category_id")}
            />
            {" " + element.name}
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
