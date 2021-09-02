import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        marginTop: '10px'
    }
}))

const PagenationComponent = ({ setPage, numPages=10}) => {
    const classes = useStyles();
   
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };

    return (
        <>
        <div className={classes.root}>
            <Pagination 
               count={numPages}
               onChange={(e) => handlePageChange(e.target.textContent)}
               color={"primary"}
                     hideNextButton={true}
                    hidePrevButton={true}
               />
        </div>
        </>
    )
}

export default PagenationComponent
