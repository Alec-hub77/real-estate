import { useState, useEffect, memo } from 'react';
import './search.scss';

import { Property } from '../../components'

import { fetchApi } from '../../utils/fetchApi';

import { SearchFilters } from '../../components';

import { BsFilter } from 'react-icons/bs';

const Search = () => {
  const [searchFilter, setSearchFilter] = useState(false);
  const [data, setData] = useState([]);

  const purpose = window.location.search.split('=')[1];

  const [searchParams, setSearchParams] = useState({
    purpose: 'for-rent',
    rentFrequency: 'yearly',
    minPrice: '0',
    maxPrice: '1000000',
    roomsMin: '0',
    bathsMin: '0',
    sort: 'price-desc',
    areaMax: '35000',
    locationExternalIDs: '5002',
    categoryExternalID: '4',
  });

  

  const getData = async (searchParams) => {

    try {
        const responce = await fetchApi(`/properties/list?locationExternalIDs=${searchParams.locationExternalIDs}&purpose=${purpose}&categoryExternalID=${searchParams.categoryExternalID}&bathsMin=${searchParams.bathsMin}&rentFrequency=${searchParams.rentFrequency}&priceMin=${searchParams.minPrice}&priceMax=${searchParams.maxPrice}&roomsMin=${searchParams.roomsMin}&sort=${searchParams.sort}&areaMax=${searchParams.areaMax}`)
        setData(responce?.hits)
    } catch (error) {
        console.log(error)
    }

  };
  
  useEffect(() => {
    getData(searchParams)
  }, [searchParams])

  console.log(data)
  console.log('render')


  return (
    <div className="search">
      <div
        className="search__header"
        onClick={(e) => setSearchFilter(!searchFilter)}
      >
        <div className="search__header-title">Search Property By Filter</div>
        <div className="search__header-icon">
          <BsFilter />
        </div>
      </div>
      <div className="search__filter">
        {searchFilter && <SearchFilters />}
      </div>
      <div className="search__result">
        {data?.map(item => <Property {...item} key={item.id}/>)}
      </div>
    </div>
  );
};

export default memo(Search);

// const purpose = query.purpose || 'for-rent';
//   const rentFrequency = query.rentFrequency || 'yearly';
//   const minPrice = query.minPrice || '0';
//   const maxPrice = query.maxPrice || '1000000';
//   const roomsMin = query.roomsMin || '0';
//   const bathsMin = query.bathsMin || '0';
//   const sort = query.sort || 'price-desc';
//   const areaMax = query.areaMax || '35000';
//   const locationExternalIDs = query.locationExternalIDs || '5002';
//   const categoryExternalID = query.categoryExternalID || '4';
