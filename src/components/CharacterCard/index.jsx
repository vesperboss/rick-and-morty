import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CharacterCard = ({ name, species, image, id }) => {
    const navigate = useNavigate()
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{
                maxWidth: 340,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
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
                    <Button sx={{ width: 340, }} variant="outlined" onClick={() => navigate(`/character/${id}`)} size="small" >Info</Button>
                </CardActions>
            </Card>
        </Grid>
        


    )
}
