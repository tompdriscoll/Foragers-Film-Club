import React from 'react'


const MovieDetails = props => {

    // debugger
    const {Title, Year, Director, Actors, Rated, Runtime, Plot, Poster, Genre} = props.movie

    let poster;
        Poster !== 'N/A' ? poster = Poster : poster = window.movieIcon
    return(
        <div className="movie-detail-div">
            <div className='detail-x' onClick={() => props.close()}>X</div>
            <img className='detail-poster' src={poster}></img>
            <div className="detail-text">
                <p className='detail-title'>{Title}&nbsp;({Year})</p>
                <p className="detail-director">{Director}</p>
                <p className="detail-descrip">{Plot}</p>
                <div className="detail-buttons">
                    <button>Add To My List</button>
                    <button>Add To Calendar</button>
                </div>
            </div>
            
        </div>
    )

}

export default MovieDetails