import React from 'react'


const MovieDetails = props => {

    // debugger
    const {Title, Year, Director, Actors, Rated, Runtime, Plot, Poster, Genre} = props.movie
    return(
        <div className="movie-detail-div">
            <img className='detail-poster' src={Poster}></img>
            <div className="detail-text">
                <p className='detail-title'>{Title}&nbsp;({Year})</p>
                <p className="detail-director">{Director}</p>
                <p className="detail-descrip">{Plot}</p>
            </div>
            
        </div>
    )

}

export default MovieDetails