import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    render() { 
        if (this.state.movies.length === 0) {
            return <p>There are no movies in the database</p>
        }

        return (
        <React.Fragment> 
        <p>Showing {this.state.movies.length} movies in the database</p>    
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><butoon onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</butoon></td>
                </tr>
                ))}
            </tbody>
        </table>
        </React.Fragment>
        )
    }
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }
}
 
export default Movies;