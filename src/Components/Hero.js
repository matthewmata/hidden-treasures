import islandBanner from "../images/island-banner.jpeg";

const Hero = ({ title, subTitle }) => {
  return (
    <section className="hero has-background">
      <img
        alt="Island"
        className="hero-background is-transparent"
        src={islandBanner}
      />
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">{title}</p>
          <p className="subtitle">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
