import './property.scss';
import { Link } from 'react-router-dom';

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import defaultImg from '../../assets/images/defaultHouse.jpg';

import millify from 'millify';

const Property = (props) => {
  const {
    externalID,
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
  } = props;


  return (
    <Link to={`property/${externalID}`}>
      <div className="property__container">
        <div className="property__img">
          <img src={coverPhoto?.url ? coverPhoto?.url : defaultImg} alt="" />
        </div>
        <div className="property__info">
          <div className="property__info-price">
            <div className="price-container">
              <div>{isVerified && <GoVerified />}</div>
              <div>
                ADE: {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </div>
            </div>
            <div className="agency__logo">
              <img src={agency?.logo?.url} alt="" />
            </div>
          </div>
          <div className="property__info-rooms">
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </div>
          <div className="property__info-title" title={title}>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Property;
