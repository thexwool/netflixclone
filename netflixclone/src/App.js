import React, { useEffect } from 'react'
import Tmdb from './Tmdb'

export default () => {
    const loadAll = async () => {
        // Pegando a lista TOTAL
        let list = await Tmdb.getHomeList();
        console.log(list);
    }
    
    useEffect(() => {
        loadAll()
    }, [])
    
    return (

        <div>
            Olá Mundo, CARALHO!
        </div>
    )
}