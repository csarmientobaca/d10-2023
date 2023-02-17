// HACER UN FETCH AQUI PARA PROVAR
import { useEffect, useState } from "react";
import Hero from "./Hero";



const Home = () => {

    const [city, setCity] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=afce38265467737eec5cd148f3cabfad`);
    //         const data = await response.json();
    //         setCity(data)
    //     };

    //     fetchData();
    // }, []);

    return (

        <>
            {city &&
                <div>

                    <h1>home comp;this city is : {city.name}</h1>
                    <Hero cityContent={city} />
                </div>
            }

        </>

    )

}

export default Home