import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function CardPart() {
    const cityContent = useSelector(state => state.city.cityContent[0])
    const cityData = useSelector(state => state.dataCity.main[0])

    return (
        <>
            <Card className='p-3 my-3' style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{cityContent?.name}</Card.Title>
                    <Card.Text>
                        {cityData?.weather[0].description},Temp.
                        {cityData?.main.temp} °
                    </Card.Text>
                    <Link to="/home">
                        <Button variant="danger">Go last city</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardPart;