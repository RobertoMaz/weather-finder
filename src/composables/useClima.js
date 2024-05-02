import axios from 'axios'

export default function useClima(){

    const obtenerClima = async ({ciudad, pais}) => {
        const key = import.meta.env.VITE_API_KEY
        
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            
            const data = await axios(url)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    return {
        obtenerClima
    }
}