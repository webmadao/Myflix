import {useState, useRef} from 'react'

export default function Search() {
    const [search, setSearch] = useState("")

    function handleInput(e){
        setSearch(e.target.value)
    }

  return (
    <div>
        <form>
            <label htmlFor="search">Search</label>
            <input 
            onChange = {handleInput}
            value={search}
            type="text" 
            id="name"/>

            <button>Search</button>
        </form>
    </div>
  )
}