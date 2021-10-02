import { useState } from 'react'
import styled from 'styled-components'

const SearchStyled = styled.div`
  border-radius: var(--border-radius-default);
  box-shadow: var(--shadow-default);
  input {
    border: none;
    background: none;
    outline: none;
    padding: 5px 15px;
  }
`
const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const handleSearch = (event : any) => {
    const quest = event.target.value
    setInputValue(quest)
  }

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleSearch}
      />
    </SearchStyled>
  )
}

export default Search
