import React, {useState, useEffect } from 'react';
import './App.css';
// import {Link} from 'react-router-dom'

function Home() {
    useEffect(() => {
        fetchResults();
    }, []);

    const [results, setResults] = useState ([]);

    const fetchResults = async () => {
        const data = await fetch(
            'https://swapi.dev/api/people'
        );
// hello
        const results = await data.json();
        console.log(results.results);
        setResults(results.results);
        };

return (
    <div>
        {results.map(results => (
            <h1>{results.name}</h1>
        ))}
    </div>
)
        }

export default Home;







// import React, {useState, useEffect } from 'react';
// import './App.css';
// // import {Link} from 'react-router-dom'

// function Home() {
//     useEffect(() => {
//         fetchResults();
//     }, []);

//     const [results, setResults] = useState ([]);

//     const fetchResults = async () => {
//         const data = await fetch(
//             'https://swapi.dev/api/people'
//         );

//         const results = await data.json();
//         console.log(results.results);
//         setResults(results.results);
//         };

// return (
//     <div>
//         {results.map(results => (
//             <h1>{results.name}</h1>
//         ))}
//     </div>
// )
//         }

// export default Home;