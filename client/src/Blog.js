import React, {Component,useState,useEffect} from 'react';
import {
    Row,Col
} from "reactstrap";
import { Card, Button } from 'react-bootstrap';
import Axios from 'axios';


function Blogs() {

    const [id,setid] = useState('');
    const [movieName,setMovieName] = useState('');
    const [review,setReview] = useState('');
    const [movieReviewList, setMovieList] = useState([]);


    // ================
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/get").then((response) =>{
    //         setMovieList(response.data)
    //     });
    // },[]);
    //
    // const submitReview = () =>{
    //     Axios.post("http://localhost:3001/api/insert",{
    //         movieName:movieName,
    //         movieReview:review
    //     });
    //     setMovieList([
    //         ...movieReviewList,
    //         {movieName: movieName, movieReview:review}])
    //
    // }
    // ===============

    // const getdata = () =>{
    //     Axios.get("http://localhost:3001/api/getselected",{
    //         fid:id,
    //     }).then((response) =>{
    //         setMovieList(response.data)
    //     });
    //     setMovieList([
    //         ...movieReviewList,
    //         {fid: id,movieName: movieName, movieReview:review}])




    const getdata = () =>{
            Axios.get("http://localhost:3001/api/getselected").then((response) =>{
                setMovieList(response.data)
            });
        };








    // }
    // const getdata = (id) => {
    //     Axios.get('http://localhost:3001/api/getselected'
    //     ).then((response) =>{
    //         setMovieList(response.data);
    //     });
    // };


    return (
        <div className="Cards">
            <input type="text" name="id"
                   onChange={(e)=>{
                       setid(e.target.value)
                   }}/>
            <button onClick={getdata}>Submit</button>
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
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        getdata(1);*/}
            {/*    }}*/}
            {/*> select</button>*/}

            {/*{movieReviewList.map((val)=> {*/}
            {/*    return<h1>*/}
            {/*        MovieName: {val.movieName} | MovieReview: {val.movieReview}*/}
            {/*    </h1>*/}
            {/*})}*/}
        </div>


    );

}

export default Blogs;