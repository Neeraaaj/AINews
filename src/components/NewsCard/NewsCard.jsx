import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import UseStyle from './style';


const NewsCard = ({article : {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = UseStyle();

  return (
    <Card>
        <CardActionArea>
            <CardMedia className={classes.media}  image={urlToImage || "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124.png"}  gutterBottom/>
            <div>
                <Typography variant="body2" color='primary' component="h2" className={classes.typography}>Published At:  {(new Date(publishedAt)).toDateString()}</Typography>
                <Typography variant="body2" color='secondary' component="h2">Source: {source.name}</Typography>
            </div>
            <Typography gutterBottom variant="h5">{title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Learn More</Button>
            <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
        </CardActions>
    </Card>
  )
}

export default NewsCard