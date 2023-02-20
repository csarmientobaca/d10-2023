import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./SearchHome.css"


function BasicExample() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cityName, setCityName] = useState("");
    const [cordi, setCordi] = useState([]);

    const handleChange = (e) => {
        setCityName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=afce38265467737eec5cd148f3cabfad`);
            if (response.ok) {
                const data = await response.json();
                setCordi(data[0]);
            } else {
                alert('Error fetching results');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (cordi.length !== 0) {
            dispatch({
                type: "ADD_CITY",
                payload: cordi,
            });
            navigate("/home");
        }
    }, [cordi, dispatch, navigate]);

    return (
        <Container className='my-5 mx-5'>
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
                        <Button variant="warning" type="submit">
                            Find the cordinates
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
}

export default BasicExample;