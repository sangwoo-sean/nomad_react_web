import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async () => { // api에서 영화목록 받아와서 movies에 넣고 state 바꿔주기
    const { data: {data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })// state에 있는 movies에 변수로 선언한 state값을 넣기
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state; // this.state에서 isLoading 을 가져와서 isLoading에 저장
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map( movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
