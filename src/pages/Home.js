import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Purpose from '../components/Purpose'
import Quote from '../components/Quote'
import MovieTimeline from '../components/MovieTimeline'
import SizeComparison from '../components/SizeComparison'
import Movies from '../components/Movies'
import Conclusion from '../components/Conclusion'
import yaml from 'js-yaml';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const response = await fetch('../movies.yaml');
              const text = await response.text();
              const parsedData = yaml.load(text);
              setMovies(parsedData.movies || []);
          } catch (error) {
              console.error('Error fetching movies:', error);
          }
      };

      fetchMovies();
  }, []);

  return (
    <div>  
      <NavBar />
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">The World War Movies Guide</div>
          <Quote/>
          <a className="btn btn-primary btn-xl text-uppercase" href="#purpose">Tell Me More</a>
        </div>
      </header>
      <Purpose />
      <MovieTimeline movies={movies} />
      <SizeComparison movies={movies} />
      <Movies movies={movies} />
      <Conclusion />
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Combat Aces 2024</div>
            <div className="col-lg-4">
              Content by Michael Kurey / Design by Devorah Langsam
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link className="link-dark text-decoration-none me-3" to="/about">About this site</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;