import { useSelector } from "react-redux"
import { useEffect, useState } from "react";



const Hero = () => {
    const cityContent = useSelector(state => state.city.cityContent[0])
    const [imgCity, setImgCity] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${cityContent.name.toLowerCase()}/images/`);
                const data = await response.json();
                console.log(data)
                setImgCity(data.photos[0].image.mobile)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [cityContent]);


    return (




        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url("${imgCity}")`, height: 500 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>{cityContent.name}</h1>
                            <h4 className='mb-3'>Subheading</h4>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero