import React from 'react';
import {Table, Image} from 'react-bootstrap';
import table from './table.css';

export const MovieDetails = function({movie}){
    const {Poster,Title,imdbRating,imdbVotes,Year,Runtime,Country,Actors,Director,Plot,Website,Error } = movie;
    if(Error){
        return <span> Movie not found in the database</span>
    }
    return(
        <Table striped bordered hover className="currentTable">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>IMDB rating</th>
            <th>Vote count</th>
            <th>Year</th>
            <th>Length</th>
            <th>Country</th>
            <th>Actors</th>
            <th>Directors</th>
            <th>Plot</th>
            <th>Link for website</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Image width={100} height={200} src={Poster}/></td>
                <td>{Title}</td>
                <td>{imdbRating}</td>
                <td>{imdbVotes}</td>
                <td>{Year}</td>
                <td>{Runtime}</td>
                <td>{Country}</td>
                <td>{Actors}</td>
                <td>{Director}</td>
                <td>{Plot}</td>
                <td>{ Website && Website !== 'N/A' ? Website : ''}</td>
            </tr>
        </tbody>
        </Table>
    );
}