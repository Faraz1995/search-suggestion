'use client'
import React, { useState, useEffect } from 'react'
import useDebouncer from '../hooks/useDebouncer'

const suggestions = ['istanbul', 'isfahan', 'tehran']

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log('valueeeeeeeee', value)
    setQuery(value)

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
      console.log(filtered)
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }

  return (
    <div className='relative w-full max-w-xs mx-auto'>
      <input
        type='text'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dire'
        value={query}
        onChange={handleInputChange}
        placeholder='نام شهر'
      />
      {query.length > 0 && (
        <ul className='absolute left-0 right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg'>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>موردی یافت نشد</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
