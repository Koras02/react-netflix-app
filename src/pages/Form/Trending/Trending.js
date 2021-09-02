import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react";
 
import { api_key } from "../../../Url/urls";
 
import PagenationComponent from "../Search/Pagenation/PagenationComponent";
import SingleMovie from "../Search/SignleMovie/SingleMovie";
import {
    Container,
    PageTitle,
    
} from "./TrendingStyle";
import "./styles/Trending.css";
import NavBar from "../../../pages/components/Navigation/Nav"


const Trending = () => {
    const [movies,setMovie] = useState([]);
    const [page,setPage] = useState(1);


    function getTrending(page) {
        axios({ 
            method:"GET",
            url: `http://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=ko-KR&page=${page}`
        }).then(response => {
            setMovie(response.data.results ?? [])
        })
    }

     useEffect(() => {
         getTrending(page);
     },[page])


    return (
        <>
         <NavBar />
        <Container>
           <PageTitle>홈</PageTitle>
           <div className="movies">
               {movies.length > 0 && movies.map((movie,index) => (
                   <React.Fragment key={movie.id}>
                   <SingleMovie key={movie.id} id={movie.id} media_type={movie.media_type} movie={movie} {...movie} />
                   </React.Fragment>
               ))}
           </div>
           <PagenationComponent setPage={setPage} />
        </Container>
        </>
    )
}


export default Trending;