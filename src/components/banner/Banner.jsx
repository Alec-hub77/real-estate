import './banner.scss';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  const { imgUrl, purpose, title1, title2, desc, linkName, buttonText } = props;

  return (
    <div className="banner">
      <div className="banner__img">
        <img src={imgUrl} alt="banner image" />
      </div>
      <div className="banner__info">
        <div className="banner__purpose">{purpose}</div>
        <div className="banner__title">
          <h2>{title1}</h2>
          <h2>{title2}</h2>
        </div>
        <div className="banner__desc">{desc}</div>
        <div className="banner__btn">
          <button>
            <Link to={linkName}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
