import React, { useState } from 'react';

const Movies = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const openModal = movie => {
      debugger;
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };
    // Filter movies into classic and non-classic categories
    const classics = movies.filter(movie => movie.classic);
    const nonClassics = movies.filter(movie => !movie.classic);

    return (
        <section id="movies">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">The Movies</h2>
                    </div>
                </div>
                <div className="row">
                    {nonClassics.map(movie => (
                        <div key={movie.id} className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#" className="portfolio-link js-show-movie"  onClick={e => { e.preventDefault(); openModal(movie); }}>
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                {movie.main_image && <img src={movie.main_image.url} className="move-poster img-responsive" alt={movie.name} />}
                            </a>
                            <div className="portfolio-caption">
                                <h4>{movie.name}</h4>
                                <p className="text-muted">{movie.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="classics" className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <br />
                        <h2 className="section-heading">The Classics</h2>
                    </div>
                </div>
                <div className="row">
                    {classics.map(movie => (
                        <div key={movie.id} className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#" className="portfolio-link js-show-movie"  onClick={e => { e.preventDefault(); openModal(movie); }}>
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                {movie.main_image && <img src={movie.main_image.url} className="move-poster img-responsive" alt={movie.name} />}
                            </a>
                            <div className="portfolio-caption">
                                <h4>{movie.name}</h4>
                                <p className="text-muted">{movie.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         {/* Modal */}
{selectedMovie && (
    <div className={`portfolio-modal modal fade js-modal ${showModal ? 'show' : ''}`} id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal" onClick={closeModal}>
                    <div className="lr">
                        <div className="rl"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-xs-12">
                            <div className="modal-body">
                                <div className="modal-title">
                                    <div className="col-md-10 col-xs-12 pull-right">
                                        <h2 className="js-movie-name">{selectedMovie.name}</h2>
                                    </div>
                                    <div className="col-md-2 col-xs-12 pull-left">
                                        <h4 className="js-year">{selectedMovie.year}</h4>
                                    </div>
                                </div>
                                <p className="item-intro text-muted js-tagline">{selectedMovie.tagline}</p>
                                <div className="js-description">
                                    {selectedMovie.description}
                                </div>
                                <div className="js-images">
                                    {/* Render movie images here */}
                                </div>

                                <button type="button" className="btn btn-primary close-btn" onClick={closeModal}>
                                    <i className="fa fa-times"></i> Close Movie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

        </section>
    );
};

export default Movies;