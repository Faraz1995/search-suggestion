'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useDebouncer from '../hooks/useDebouncer'

import { CityData } from '@/types/cityDataType'

interface PropsType {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

function SearchBox({ query, setQuery }: PropsType) {
  const [suggestions, setSuggestions] = useState<CityData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const debouncedQuery = useDebouncer(query, 500)

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedQuery.length > 1) {
        try {
          setLoading(true)
          const query = new URLSearchParams()
          query.append('str', debouncedQuery)
          const response = await axios.get(
            `https://hub.tikplan.ir/api/v2/reservation/flight/search/airport`,
            {
              params: query
            }
          )
          setSuggestions(response.data.results)
          setLoading(false)
        } catch (error) {
          console.log('Error fetching suggestions:', error)
          setLoading(false)
          setSuggestions([])
        }
      } else {
        setSuggestions([])
      }
    }

    fetchSuggestions()
  }, [debouncedQuery])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <div className='relative w-full max-w-xs mx-auto'>
      <input
        type='text'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
        value={query}
        onChange={handleInputChange}
        placeholder='نام شهر'
      />
      {query.length > 1 && (
        <ul className='absolute left-0 right-0 z-10 mt-1 bg-white border rounded-lg shadow-lg max-h-80 overflow-y-auto'>
          {!loading && suggestions.length > 0 ? (
            suggestions.map((suggestion) => {
              return suggestion.airports.map((airport) => (
                <div className='p-2 flex justify-between items-center' key={airport.iata}>
                  <div>
                    <p>فرودگاه {airport.name.fa}</p>
                    <p>{suggestion.city.country.name.fa}</p>
                  </div>
                  <p>{airport.iata}</p>
                </div>
              ))
            })
          ) : (
            <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
              {loading ? ' در حال جستجو' : 'موردی یافت نشد'}
            </p>
          )}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
