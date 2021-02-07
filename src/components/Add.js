import React, {useState} from 'react'
import { ResultCard } from './ResultCard';

export const Add = () => {
    const REACT_TMDB_KEY=`a6165c18304620a78abde5e4bb5ed8d2`;
    
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const changeValue = (e) => {
        e.preventDefault();
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_TMDB_KEY}&language=en-US&page=1&include_adult=true&query=${e.target.value}`)
        .then((res)=>res.json())
        .then((data)=>{
           if (!data.errors){
                setResults(data.results);
            } else {
                setResults([])
            }

        })
    }


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" value={query} onChange={changeValue}/>
                    </div>
                    {results.length > 0 && 
                    <ul className="results">
                            {results.map((item)=>{
                               return <li key={item.id}><ResultCard movie={item}/></li>
                            })}
                    </ul>
                    }
                </div>
            </div>
        </div>
    )
}
