import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

export class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState(
      {term: ''}
    );
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//bind fetchWeather to dispatch so reducers fire after action is returned
//by fetchWeather
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}

//Now, map the dispatch above to props so we have access to this.props.fetchWeather
//normally, the first argument (which is null) is mapStateToProps, and mapDispatchToProps
//is always the second argument for connect(). Here,
//we don't care about mapping any Component
//properties to state, so we just pass in null
export default connect(null, mapDispatchToProps)(SearchBar);
