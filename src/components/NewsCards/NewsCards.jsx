import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import UseStyles from './style.js';

const NewsCards = ({ articles }) => {
    const classes = UseStyles();
  return (
    <Grow in>
        <Grid className={classes.container} container alignItems='stretch' spacig = {5}>

            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: "flex"}}>
                    <NewsCard  article = {article} i={i} />
                </Grid>
            ))}

        </Grid>

    </Grow>
  );
}

export default NewsCards