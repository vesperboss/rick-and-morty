import { Button, Container } from '@mui/material'
import React from 'react'

export const Menu = ({ onClickCategory }) => {
    const typeCharacter = ['all', 'human', 'alien', 'humanoid']
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            {typeCharacter.map((type) => <Button
                onClick={() => onClickCategory(type)}
                key={type}>{type}</Button>)}
        </Container>
    )
}
