import {useEffect, useState} from 'react';
import api from '../../services/api';

// /movie/now_playing?api_key=edc53a3b26a266f68da217aeb3d89b71&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "edc53a3b26a266f68da217aeb3d89b71",
                    language: "pt-BR",
                    page: 1,
                }
            })
            
            console.log(response.data.results);
        }
        loadFilmes();
    }, [])
    return(
        <div>
            <h1>Bem vindo a home</h1>
        </div>
    )
}

export default Home;