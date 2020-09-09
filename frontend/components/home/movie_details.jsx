import React from 'react'


const MovieDetails = props => {

    // debugger
    const {Title, Year, Director, Actors, Rated, Runtime, Plot, Poster, Genre} = props.movie
    return(
        <div className="movie-detail-div">
            {Title}
            {Year}
            {Director}
            {Poster}
        </div>
    )

}

export default MovieDetails