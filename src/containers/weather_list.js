import React, {Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


export class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather => weather.main.temp));
    console.log(temps);
    return (
        <tr key={name}>
          <td>
            {name}
          </td>
          <td>
            <Chart data={temps} color="orange" />
          </td>
        </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//Map state.weather to this.props.weather, w hich is the key in
//the object returned below
function mapStateToProps(state){
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
