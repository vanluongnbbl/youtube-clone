import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'
function SearchBar({ onFormSubmit }) {
    const [searchTerm, setSearchTerm] = useState("")


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        console.log("handle submit")
        onFormSubmit(searchTerm)
        event.preventDefault()
    }

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default SearchBar
