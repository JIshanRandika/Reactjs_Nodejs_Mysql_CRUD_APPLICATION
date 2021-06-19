import React, {Component,useState,useEffect} from 'react';
import {
    Row,Col
} from "reactstrap";
import { Card, Button } from 'react-bootstrap';
import Axios from 'axios';


function Cards() {

    const [movieName,setMovieName] = useState('');
    const [review,setReview] = useState('');
    const [movieReviewList, setMovieList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setMovieList(response.data)
        });
    },[]);


        return (
            <div className="Cards">
            <Row>
                <Col>

                    {movieReviewList.map((val)=> {
                        return(
                            <Card style={{ width: '18rem' }}>
                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                <Card.Body>
                                    <Card.Title>{val.movieName}</Card.Title>
                                    <Card.Text>
                                        {val.movieReview}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            )
                    })}

                </Col>
            </Row>
                {/*{movieReviewList.map((val)=> {*/}
                {/*    return<h1>*/}
                {/*        MovieName: {val.movieName} | MovieReview: {val.movieReview}*/}
                {/*    </h1>*/}
                {/*})}*/}
            </div>


        );

}

export default Cards;