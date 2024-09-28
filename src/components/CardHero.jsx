import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';




function CardHero({ props }) {
  const { name, universe, alterego, occupation, friends, superpowers, url, info } = props;
  console.log(name, universe, alterego, occupation, friends, superpowers, url, info);
  return (
    <div>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={url}
            alt="hero image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 18, fontWeight: 'medium' }}>
              Universe: {universe} <br />
              Alterego: {alterego} <br />
              Occupation: {occupation} <br />
              Friends: {friends} <br />
              Superpowers: {superpowers} <br />
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  )
}

export default CardHero