// HACER UN FETCH AQUI PARA PROVAR
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { Container } from "react-bootstrap";



const Home = () => {
    const dispatch = useDispatch()
    const cityContent = useSelector(state => state.city.cityContent[0])
    const [city, setCity] = useState(null);


    useEffect(() => {
        console.log(cityContent)
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

        // dispatch({
        //     type: "ADD_MAIN",
        //     payload: city,
        // });
    }, [cityContent]);

    useEffect(() => {
        dispatch({
            type: "ADD_MAIN",
            payload: city,
        });
    }, [city])

    return (

        <>

            <Container>

                <Hero />
            </Container>
        </>

    )

}

export default Home