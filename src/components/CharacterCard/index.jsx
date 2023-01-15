import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CharacterCard = ({ name, species, image, id }) => {
    const navigate = useNavigate()
    return (
        <Grid item xs={3} >
            <Card sx={{ maxWidth: 340, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                    sx={{ height: 240, }}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align='center'>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align='center'>
                        {species}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button onClick={() => navigate(`/character/${id}`)} size="small" >Info</Button>
                </CardActions>
            </Card>
        </Grid>
        


    )
}
