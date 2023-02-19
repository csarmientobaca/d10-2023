// HACER UN FETCH AQUI PARA PROVAR
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'



const Home = () => {
    const dispatch = useDispatch()

    const cityContent = useSelector(state => state.city.cityContent[0])
    const [city, setCity] = useState(null);


    useEffect(() => {
        console.log(cityContent)
        console.log(cityContent.lat)

        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityContent.lat}&lon=${cityContent.lon}&appid=afce38265467737eec5cd148f3cabfad&units=metric`);
                const data = await response.json();
                setCity(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [cityContent]);


    return (

        <>
            <h1>
                this is home
            </h1>
            {city && <h1>this city is : {city.name}</h1>}

            <Hero />
        </>

    )

}

export default Home