import React from 'react';
import './InfoCard.css';

export default function InfoCard({
  code,
  name,
  NewConfirmed,
  NewDeaths,
  NewRecovered,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
}) {
  return (
    <div className='app_infocard'>
      <div className='image'>
        {code && (
          <img
            className='image_flag'
            alt='flag'
            src={`https://www.countryflags.io/${code}/flat/64.png`}
          />
        )}
      </div>
      <div className='extra_info_total'>
        <h2>{name}</h2>
        <h4>NewConfirmed - {NewConfirmed}</h4>
        <h4>NewDeaths - {NewDeaths}</h4>
        <h4>NewRecovered - {NewRecovered}</h4>
        <h4>TotalConfirmed - {TotalConfirmed}</h4>
        <h4>TotalRecovered - {TotalRecovered}</h4>
        <h4>TotalDeath - {TotalDeaths}</h4>
      </div>
    </div>
  );
}
