import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Container, Box, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { FixedSizeList } from 'react-window';



export const Character = () => {
  const { id } = useParams()
  const [characterInfo, setCharacterInfo] = useState({})
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacterInfo(data))
  }, [id])

  function renderRow(props) {
    const { index, style } = props;
    const episod = characterInfo.episode[index].replace('https://rickandmortyapi.com/api/episode/', 'Episode: ')
    return (
      <ListItem key={`episode-${index}`} style={style} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={episod} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Container>
      {characterInfo.image && (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            sx={{ height: 340, width: 340 }}
            image={characterInfo.image}
            title={characterInfo.name} />
          <CardContent>
            <Typography>
              {characterInfo.name}
            </Typography>
            <Typography>
              {characterInfo.gender}
            </Typography>
            <Typography>
              {characterInfo.species}
            </Typography>

            <Box
              sx={{ width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper',  mt: 2, boxShadow: '0px 7px 19px -4px rgba(0,0,0,0.65)' }}
            >
              <FixedSizeList
                height={200}
                width={360}
                itemSize={46}
                itemCount={characterInfo.episode.length ?? 1}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
            </Box>
          </CardContent>
        </Card>
      )}

    </Container>

  )
}
