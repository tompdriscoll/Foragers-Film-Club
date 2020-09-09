import React from 'react';

// const SearchResult = props => {
    
class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            details: {}
        }
        this.details = this.details.bind(this)
    }

    details(){

        console.log(this.props.movie.imdbID)
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0046445&r=json", {
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
    
    
    render(){
        let plot = ''
        // debugger
        if (this.state.details.Plot) {
            plot = this.state.details.Plot
        }
    return(
    <div className='search-result' onClick={() => this.details()}>    
            <img className='search-result-image' src={this.props.movie.Poster}></img>
            <h2 className='search-result-title'>{this.props.movie.Title} ({this.props.movie.Year})</h2>
            <h2>{plot}</h2>
    </div>
    
    )}
}

export default SearchResult;