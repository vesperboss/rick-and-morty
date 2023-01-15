import { Grid, Pagination, Stack, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CharacterCard } from '../../components/CharacterCard'
import { Menu } from '../../components/Menu'


export const Home = () => {
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(1)
    const [categoryId, setCategoryId] = useState('')
 
    useEffect(() => {      
        let url = `https://rickandmortyapi.com/api/character/?page=${page}`
        if (categoryId !== 'all') {
            url += `&species=${categoryId}`
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.results);
                setPageQty(data.info.pages);
            })
    }, [page, categoryId])
    
    const handleChangeCategory = (category) => {
        setCategoryId(category);
        setPage(1)
    }

    return (
        <div>
            <div>
                <Menu onClickCategory={handleChangeCategory} />
            </div>
            <Stack spacing={2}>
                <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    sx={{ marginX: 'auto' }} />
            </Stack>

            <Container sx={{ mt: '1rem', mb: '1rem' }}>
                <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
                    {character.map((obj) => <CharacterCard key={obj.id} {...obj} />)}
                </Grid>
            </Container>

            <Stack spacing={2}>
                <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    sx={{ marginX: 'auto' }} />
            </Stack>
        </div>
    )
}
