import React, {useEffect, useState} from "react";
import axios from "axios";
import { api_key } from "../../../Url/urls";  
 
import SingleMovie from "../Search/SignleMovie/SingleMovie";
import "./Movies.css";
import PaginationComponent from "../Search/Pagenation/PagenationComponent";
import NavBar from "../../../pages/components/Navigation/Nav"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [numPages, setNumPages] = useState(10);
 

    function getMovies(page) {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
        }).then(response => {
            setMovies(response.data.results ?? [])
            setNumPages(response.data.total_pages)
           
        })
    }
    useEffect(() => {
        getMovies(page);
    },[page])


    return (
        <>
         <NavBar />
          <span className="movie__container">
              영화
          </span>
          <div className="movies">
                {movies.length > 0 && movies.map((movie, index) => (
                    <SingleMovie key={movie.id} media_type={'movie'} id={movie.id} movie={movie} {...movie} />
                ))}
          </div>
          {numPages>1 && (
                <PaginationComponent setPage={setPage} numPages={numPages} />
            )}
        </>
    )
}

export default Movies;