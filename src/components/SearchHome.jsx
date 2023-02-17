import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function BasicExample() {

    const [cityName, setCityName] = useState("");

    const [cordi, setCordi] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(``);
    //         const data = await response.json();
    //         console.log(cordi)
    //         setCordi(data)
    //         console.log(cordi)
    //         console.log("hi")
    //     };

    //     fetchData();
    // }, []);
    const handleChange = (e) => {
        setCityName(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=afce38265467737eec5cd148f3cabfad`)
            if (response.ok) {
                const data = await response.json()
                setCordi(data)
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
        console.log(cordi)
    }










    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Where is sunny?</Form.Label>
                            <Form.Control
                                type="search"
                                placeholder="Enter Your City"
                                value={cityName}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Insert your city, and we will handle the rest.
                            </Form.Text>
                        </Form.Group>

                        <Button
                            // to="/home" 
                            variant="primary"
                            type="submit">
                            Find the cordinates
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>

                <Link
                    to="/home"
                    variant="primary"
                >
                    Find the cordinates
                </Link>
                {/* <Col>
                    <h1>
                        {cordi.name}
                    </h1>
                    <h2>{cordi.lat}</h2>
                    <h2>{cordi.lon}</h2>
                </Col> */}
            </Row>
        </Container>
    );
}

export default BasicExample;