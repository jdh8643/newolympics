import React from 'react'

const Countrymap = ({deleteCountryHendler, countrys}) => {
  return (
    <div>
        {countrys.map((country) => (
          <ul key={country.id} className='medel-result'>
            <li className='medel-result-list' id='medel'>
              <p className='valuelist'>{country.country}</p>
              <p className='valuelist'>{country.gold}</p>
              <p className='valuelist'>{country.silver}</p>
              <p className='valuelist'>{country.bronze}</p>
              <button type='button' onClick={() => deleteCountryHendler(country.id)}>
                삭제
              </button>
            </li>
          </ul>
        ))}
      </div>
  )
}

export default Countrymap;