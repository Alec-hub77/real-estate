import './searchFilters.scss'
import { useEffect } from 'react' 


const SearchFilters = (props) => {
  const { filters, setSearchParams, setPurp, searchParams } = props;

  const searchProperties = (filterValues) => {
    console.log(filterValues.sort)
    console.log(filterValues.rentFrequency)
    setPurp(filterValues?.purpose)
}


  
  console.log(filters)
    
  return (
    <div className="filters flex-center">
      {filters.map((filter) => (
        <div key={filter.queryName}>
            <select 
            onChange={e => searchProperties({[filter.queryName]: e.target.value})}
            placeholder={filter.placeholder}
            >
              <option defaultValue={filter.placeholder}>{filter.placeholder}</option>
              {filter?.items?.map((item, i) => (
                <option key={`${i}${item.name}`} value={item.value}>{item.name}</option>
              ))}
            </select>
        </div>
      ))}
    </div>
  )
}

export default SearchFilters

// rentFrequency: filterValues?.rentFrequency,
// minPrice: filterValues?.minPrice,
// maxPrice: filterValues?.maxPrice,
// roomsMin: filterValues?.roomsMin,
// bathsMin: filterValues?.bathsMin,
// sort: filterValues?.sort,
// areaMax:  filterValues?.areaMax,
// locationExternalIDs: '5002',
// categoryExternalID: '4',