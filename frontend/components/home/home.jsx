import React from 'react';

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            movie: [],
            searchValue: ''
        }
        this.searchMovies = this.searchMovies.bind(this)
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
              movie: result.Search[0]
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
    
    return (  
    <div className="user-home">
        <h2>Welcome {this.props.currentUser.first_name}!</h2>
        <h2>Lets Forage!</h2>
        <form onSubmit={(e) => this.searchMovies(e)}>
            <input type='test' value={this.state.searchValue} placeholder='Search Movies' onChange={this.update('searchValue')}></input>
        </form>
        <img src={this.state.movie.Poster}></img>
        <h2 >{this.state.movie.Title}</h2>
    </div>)

    }
}

export default Home;