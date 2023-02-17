// HACER UN FETCH AQUI PARA PROVAR
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap";



const Home = () => {
    const cityContent = useSelector(state => state.city.cityContent)
    console.log(cityContent)

    const [newCordi, setNewCordi] = useState(cityContent)

    setNewCordi(cityContent[0])
    console.log(newCordi)

    const [city, setCity] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${newCordi.lat}&lon=${newCordi.lon}&appid=afce38265467737eec5cd148f3cabfad`);
    //         const data = await response.json();
    //         setCity(data, "this is data city")
    //     };

    //     fetchData();
    // }, [newCordi]);

    const handleButton = async (e) => {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${newCordi.lat}&lon=${newCordi.lon}&appid=afce38265467737eec5cd148f3cabfad`);
            if (response.ok) {
                const data = await response.json()
                setCity(data)
                console.log(city)




            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <>
            <Button
                onClick={handleButton}>
                show

            </Button>
            <h1>
                this is home
            </h1>
            {/* {city &&
                <div>

                    <h1>home comp;this city is : {city.name}</h1>
                    <Hero />
                    <h2>{city.wheather[0].main}/{city.wheather[0].description}</h2>
                    <h2>{ }</h2>

                </div>
            } */}

        </>

    )

}

export default Home