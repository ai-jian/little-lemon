import React from 'react'

export default function FormField({ children, htmlFor, label, hasError, errorMessage }) {
    return (
        <div className='form-field'>
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            {hasError ? <p>{errorMessage}</p> : null}
        </div>
    )
}
