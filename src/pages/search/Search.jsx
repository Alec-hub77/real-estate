import React, { useState, useEffect, useMemo } from 'react';
import './search.scss';

import { SearchFilters } from '../../components';

import { BsFilter } from 'react-icons/bs';

import queryString from 'query-string'
import SearchData from '../../components/searchData/SearchData';

import { filterData, getFilterValues } from '../../utils/filterData'





const Search = React.memo(() => {
  const [searchFilter, setSearchFilter] = useState(false);
  const [purp, setPurp] = useState(null);
  const [filters, setFilters] = useState(filterData);
  const [searchParams, setSearchParams] = useState({
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
  
  
  
  
  const {purpose} = queryString.parse(window.location.search)
    console.log(purpose)

    useEffect(() => {
      const {purpose} = queryString.parse(window.location.search)
      setPurp(purpose)
    }, [purpose])
    


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
        {searchFilter && <SearchFilters 
        filters={filters}
        searchParams={searchParams}
        setSearchParams={setSearchParams} 
        setPurp={setPurp}
        />}
      </div>
      <div className="search__purpose">
          <h1>Property for {purp}</h1>
      </div>
      <div className="search__result">
        <SearchData purpose={purp} searchParams={searchParams}/>
        {/* {data?.map(item => <Property {...item} key={item.id}/>)} */}
      </div>
    </div>
  );
});

export default Search;

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
