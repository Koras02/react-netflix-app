import axios from "axios";
import { useEffect } from "react";
import Chip  from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {},
    chip: {
        margin: "2px",
    },
}))

const Genres = ({
    selectGenres,
    setSelectGenres,
    genres,
    setGenres,
    setPage,
    type
}) => {

   function getGenres({data}) {
       axios({
           method: "GET",
           url: "https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US",
       })

       
   }