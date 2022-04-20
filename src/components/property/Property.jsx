import './property.scss';
import { Link } from 'react-router-dom';

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

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
      <h1>{title}</h1>
  </Link>
  );
};

export default Property;
