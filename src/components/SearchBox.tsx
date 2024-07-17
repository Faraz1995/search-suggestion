'use client'
import React, { useState, useEffect } from 'react'
import useDebouncer from '../hooks/useDebouncer'

const suggestions = []

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
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
      {filteredSuggestions.length > 0 && (
        <ul className='absolute left-0 right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg'>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
