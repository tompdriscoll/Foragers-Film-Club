import React from 'react';
import MovieDetails from './movie_details';


    
class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
   
    }
    
    
    render(){
        let poster;
        this.props.movie.Poster !== 'N/A' ? poster = this.props.movie.Poster : poster = window.movieIcon
    return(
    <div className='search-result' onClick={() => this.props.details(this.props.movie.imdbID)}>    
            <img className='search-result-image' src={poster} ></img>
            <h2 className='search-result-title'>{this.props.movie.Title} ({this.props.movie.Year})</h2>
    </div>
    
    )}
}

export default SearchResult;