import './Body.css';
import axios from '../config/axios';
import getget from 'axios';
import React, { Component } from 'react';
import InfoCard from './InfoCard';
import Map from './Map';
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [
        'India',
        'In',
        '48611',
        '702',
        '36141',
        '1385635',
        '885573',
        '32060s',
        '20',
        '77',
      ],
      data: {},
      countries: [],
      extra_info: [],
      filter: {},
      countryInfo: [],
    };
  }
  componentWillMount() {
    axios
      .get('summary')
      .then((response) => {
        const data = response.data.Global;
        const extra_info = response.data.Countries;
        const countries = response.data.Countries.map((data) => {
          return {
            country: data.Country,
            code: data.CountryCode,
            NewConfirmed: data.NewConfirmed,
            NewDeaths: data.NewDeaths,
            NewRecovered: data.NewRecovered,
            TotalConfirmed: data.TotalConfirmed,
            TotalDeaths: data.TotalDeaths,
            TotalRecovered: data.TotalRecovered,
          };
        });
        this.setState({ data, countries, extra_info });
      })
      .catch((err) => {
        console.log(err.message);
      });

    getget
      .get('https://corona.lmao.ninja/v3/covid-19/countries')
      .then((response) => {
        const countryInfo = response.data.map((data) => {
          return {
            countryInfo: data.countryInfo,
            country: data.country,
            code: data.countryInfo.iso2,
            NewConfirmed: data.todayCases,
            NewDeaths: data.todayDeaths,
            NewRecovered: data.todayRecovered,
            TotalConfirmed: data.cases,
            TotalDeaths: data.deaths,
            TotalRecovered: data.recovered,
          };
        });
        this.setState({ countryInfo });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleCountryChange = (e) => {
    const split = e.target.value.split(',');
    this.setState({ country: split });
  };

  render() {
    console.log(this.state.country, 'lalalal');
    return (
      <div className='body'>
        <div className='column'>
          <div className='row-md-4 new_confirmed'>
            <h3>New Confirmed</h3>
            <h4 style={{ color: 'grey' }}>{this.state.data.NewConfirmed}</h4>
          </div>
          <div className='row-md-4 new_death_cases'>
            <h3>New Death Cases</h3>
            <h4 style={{ color: 'red' }}>{this.state.data.NewDeaths}</h4>
          </div>
          <div className='row-md-4 new_recovered_cases'>
            <h3>New Recovered</h3>
            <h4 style={{ color: 'green' }}>{this.state.data.NewRecovered}</h4>
          </div>
          <div className='row-md-4 active_cases'>
            <h3>Total Active Cases</h3>
            <h4 style={{ color: 'grey' }}>{this.state.data.TotalConfirmed}</h4>
          </div>
          <div className='row-md-4 recovered_cases'>
            <h3>Recovered Cases</h3>
            <h4 style={{ color: 'green' }}>{this.state.data.TotalRecovered}</h4>
          </div>
          <div className='row-md-4 death_cases'>
            <h3>Total Death Cases</h3>
            <h4 style={{ color: 'red' }}>{this.state.data.TotalDeaths}</h4>
          </div>
        </div>
        <div className='extra_info'>
          <div className='dropdown'>
            <label> Select Country : </label>
            <br />
            <select
              className='dropdown'
              value={this.state.country}
              onChange={this.handleCountryChange}>
              <option> Select the county </option>
              {this.state.countryInfo.map((ele, i) => {
                return (
                  <option
                    key={i}
                    value={[
                      ele.country,
                      ele.code,
                      ele.NewConfirmed,
                      ele.NewDeaths,
                      ele.NewRecovered,
                      ele.TotalConfirmed,
                      ele.TotalDeaths,
                      ele.TotalRecovered,
                      ele.countryInfo.lat,
                      ele.countryInfo.long,
                    ]}>
                    {ele.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='infoCard'>
            <InfoCard
              name={this.state.country[0]}
              code={this.state.country[1]}
              NewConfirmed={this.state.country[2]}
              NewDeaths={this.state.country[3]}
              NewRecovered={this.state.country[4]}
              TotalConfirmed={this.state.country[5]}
              TotalDeaths={this.state.country[6]}
              TotalRecovered={this.state.country[7]}
            />
          </div>
        </div>
        <div className='googlemaps'>
          <Map
            lat={this.state.country[8]}
            long={this.state.country[9]}
            name={this.state.country[0]}
            Total={this.state.country[5]}
          />
        </div>
      </div>
    );
  }
}
