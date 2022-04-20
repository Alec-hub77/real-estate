import { useEffect, useState } from 'react';

import { Banner, Property } from '../../components';

import { fetchApi } from '../../utils/fetchApi';

const MainPage = () => {
  const [propertyForSale, setPropetyForSale] = useState([]);
  const [propertyForRent, setPropetyForRent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPropertyData = async (purpose) => {
    setLoading(true);
    const params = {
      locationExternalIDs: 5002,
      purpose: purpose,
      hitsPerPage: 6,
    };
    try {
      const response = await fetchApi('/properties/list', { params });
      if (purpose === 'for-sale') {
        setPropetyForSale(response?.hits);
      } else if (purpose === 'for-rent') {
        setPropetyForRent(response?.hits);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPropertyData('for-sale');
    getPropertyData('for-rent');
  }, []);


  return (
    <div>
      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        linkName="search?purpose=for-rent"
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc="Explore from Apartments, builder floors, villas"
        buttonText="Explore Renting"
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="property">
          {propertyForRent.map((property) => (
            <Property {...property} key={property.id} />
          ))}
        </div>
      )}

      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        linkName="search?purpose=for-sale"
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc="Explore from Apartments, land, builder floors"
        buttonText="Explore Buying"
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="property">
          {propertyForSale.map((property) => (
            <Property {...property} key={property.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
