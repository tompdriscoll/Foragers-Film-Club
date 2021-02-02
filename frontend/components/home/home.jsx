import React from 'react';

import SearchResult from './search_result'
import MovieDetails from './movie_details'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            searchValue: '',
            searchResult: [],
            details: {}
        }
        this.searchMovies = this.searchMovies.bind(this)
        this.details = this.details.bind(this)
        this.closeDetails = this.closeDetails.bind(this)
    }

    details(id){
        
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + id + "&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "c590d7f8a0msh94e62ba0bda616bp1d9deejsn3a9e6e843909"
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              details: result
            });
          },

          (error) => {
            this.setState({
              error
            });
          }
        )
 
    }  

    closeDetails(){
      this.setState({
        details: {}
      });
    }


    update(field) {
        return (event) => {
          this.setState({ [field]: event.target.value });
        }
      }

     searchMovies(e){
        e.preventDefault()
        
        let searchTile = this.state.searchValue.split(' ').join('%20')

        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" + searchTile, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "c590d7f8a0msh94e62ba0bda616bp1d9deejsn3a9e6e843909"
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              searchResult: result.Search,
              details: {}
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
 
     }

    render(){
        let name = this.props.currentUser.first_name
        name = name.charAt(0).toUpperCase() + name.slice(1);
        
        let results = []

        if (this.state.searchResult.length > 0){
            this.state.searchResult.forEach(movie => {
                results.push( <SearchResult movie={movie} details={this.details}/>)
            })
        }
        let details;
        if (this.state.details.Plot) {
            details = <MovieDetails movie={this.state.details} close={this.closeDetails}/>
            
        }
    
        return (  
        <div className="user-home">
            <h2 id='welcome'>Welcome {name}, Lets Forage!</h2>
            <h3> Find friends, search movies, and set a date</h3>
            <form id='search-form' onSubmit={(e) => this.searchMovies(e)}>
                <input id='movie-search' type='test' value={this.state.searchValue} placeholder='Search Movies' onChange={this.update('searchValue')}></input>
            </form>
            <div id="search-results">
                {results}
                {details}
            </div>
            <button>New Event</button> 
        </div>)

    }
}

export default Home;