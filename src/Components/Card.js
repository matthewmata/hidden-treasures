import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const pictureResponse = await fetch(
        `http://localhost:3000/api/pictures/preview/${post.post_url_id}`
      );
      const pictureJson = await pictureResponse.json();
      setImage(`${pictureJson[0].picture_url}.jpeg`);
    }
    fetchData();
  }, []);

  const formatDate = (dateISO) => {
    const date = new Date(dateISO).toString("MMMM dS, yyyy").split(" ");
    return `${date[1]} ${date[2]} ${date[3]}`;
  };

  return (
    <div
      className="card column is-one-quarter"
      onClick={() => navigate(`/post/${post.post_url_id}`)}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div class="media-content">
          <p class="title is-4">{post.title}</p>
        </div>
        <div className="content">
          {post.city} {post.description}
          <br />
          <time>{formatDate(post.created_at)}</time>
        </div>
      </div>
    </div>
  );
};

export default Card;
