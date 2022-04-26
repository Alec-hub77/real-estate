import React, { useState, useEffect } from 'react'
import Property from '../property/Property'
import { fetchApi } from '../../utils/fetchApi';

const SearchData = React.memo((props) => {
const [data, setData] = useState([]);
const { purpose, searchParams } = props;

  
  
  const getData = async (searchParams, purpose) => {

    try {
        const responce = await fetchApi(`/properties/list?locationExternalIDs=${searchParams.locationExternalIDs}&purpose=${purpose}&categoryExternalID=${searchParams.categoryExternalID}&bathsMin=${searchParams.bathsMin}&rentFrequency=${searchParams.rentFrequency}&priceMin=${searchParams.minPrice}&priceMax=${searchParams.maxPrice}&roomsMin=${searchParams.roomsMin}&sort=${searchParams.sort}&areaMax=${searchParams.areaMax}`)
        setData(responce?.hits)
    } catch (error) {
        console.log(error)
    }

  };

  
  useEffect(() => {
    getData(searchParams, purpose)
  }, [searchParams, purpose])

  console.log(data)
  console.log('render')
  return (
    <>
        {data?.map(item => <Property {...item} key={item.id}/>)}
    </>
  )
})

export default SearchData