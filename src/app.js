import React from 'react';
import './App.css';
import axios from 'axios'
import ReactDOM from 'react-dom';
import {MovieDetails} from './movieDetails';
const OMDB_API = `http://www.omdbapi.com/?i=tt3896198&apikey=d4a3c838`;


class App extends React.Component {
  constructor(){
      super();
      this.state = {
        movieTitle:"",
        movieYear:"",
        error:"",
        currentMovie: null
      }
  }

  makeDataRequest = (title, year) => {

    let paramsObj = {
      t:title      
    };
    if(year){
      paramsObj.y = year;
    }


    axios.get(OMDB_API,{
      params: paramsObj
    }).then(response => {
      this.setState({currentMovie: response.data})
    })


  }
  resetMovie = () =>{
      this.setState({
          movieTitle:'',
          movieYear: '',
          error: '',
          currentMovie: null
      })
  }
  OnFormSubmit = (event) =>{
    //event.preventDefault();
    var title = this.state.movieTitle;
    var error = this.validateTitleInserted(title);
    this.setState({ error });

    if (error.length > 0) return; //if title is not inserted we exit

    this.makeDataRequest(this.state.movieTitle, this.state.movieYear);

    //after we found the movie we set the form again
    this.setState({ movieTitle: '', movieYear:'', error: '' });
  }

  OnTitleChange = (event) =>{
    var errorMessage = this.validateTitleInserted(event.target.value);
    this.setState({
      movieTitle: event.target.value,
      error: errorMessage
    });
  }

  OnYearChange = (event) =>{
    this.setState({
      movieYear: event.target.value
    });
  }

  validateTitleInserted = (title) => {
    if (title.trim().length === 0) return 'Movie title is required.';
    return '';
  }

  render(){
    return (
      <div className="form">
        
        <h1>Movies DB Query</h1>
        <h6>Just type a movie name and we'll find it for you!</h6>

       
          <input
            onChange={this.OnTitleChange}
            id="movieTitle"
            class="fieldFill"
            type="text"
            value={this.state.movieTitle}
            placeholder="Movie title (Required)"
            aria-label="Search"/>

          <input
            onChange={this.OnYearChange}
            id="movieYear"
            class="fieldFill"
            type="text"
            value={this.state.movieYear}
            placeholder="Year (Optional)"
            aria-label="Search"/>

          <button
            id="submitBtn"
            onClick={this.OnFormSubmit}>
              Submit
          </button>

          <button
            id="resetBtn"
            onClick={this.resetMovie}
            type="reset">
              Reset
          </button>

          <p id="titleRequired" className="errorMessage">{this.state.error}</p>
          {this.state.currentMovie && <MovieDetails movie={this.state.currentMovie}/>}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


