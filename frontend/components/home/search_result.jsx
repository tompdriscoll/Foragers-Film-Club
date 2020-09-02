import React from 'react';

const SearchResult = props => (
    
    <div className='search-result'>    
            <img className='search-result-image' src={props.movie.Poster}></img>
            <h2 className='search-result-title'>{props.movie.Title} ( {props.movie.Year} )</h2>
    </div>
    
)

export default SearchResult;