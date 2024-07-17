'use client'
import SearchBox from '@/components/SearchBox'
import React, { useState } from 'react'

function FormContainer() {
  const [query, setQuery] = useState<string>('')

  return (
    <div>
      <SearchBox query={query} setQuery={setQuery} />
    </div>
  )
}

export default FormContainer
