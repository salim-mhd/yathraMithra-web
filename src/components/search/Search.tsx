import React from 'react'
import './Search.scss'
import Button from '../button/Button'

export default function Search() {
  return (
    <div className='Search mx-4'>
        <div className='m-2'>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" className='form-control' />
        </div>
        <div className='m-2'>
        <label htmlFor="Amount" className='text-nowrap'>Max Amount</label>
            <input type="number" name="Amount" id="Amount" className='form-control' />
        </div>
        <div className='m-2'>
            <div className='mt-3'><button className='button'>Search</button></div>
        </div>
    </div>
  )
}
