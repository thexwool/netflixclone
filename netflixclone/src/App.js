import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

export default () => {

    const [movieList, setMovieList] = useState([])
    const [featureData, setFeatureData] = useState(null)

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list)

            // Pegando o filme em destaque (Featured)
            let originals = list.filter(i => i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen]
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
            setFeatureData(chosenInfo)
        }

        loadAll()
    }, [])
    
    return (
        
        <div className="page">

            {featureData && // se featureData existe faça abaixo
                <FeaturedMovie item={featureData}/>
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}