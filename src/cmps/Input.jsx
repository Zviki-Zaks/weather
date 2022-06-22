import React from 'react'

export const Input = ({ type, text, handleChange }) => {
    return (
        <label>{text}<input type="text" name={type} onChange={handleChange} /></label>
    )
}
