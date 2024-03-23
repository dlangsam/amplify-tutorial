import React, { useState, useEffect} from 'react';
import AWS from '../awsConfig'; 
import ImageGallery from './ImageGallery'
const Movies = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(() => {
      if (selectedMovie) {
          fetchDescription(selectedMovie.description);
      }
  }, [selectedMovie]);

    const openModal = movie => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    const getImageUrl = (imageKey) => {
      return `https://combat-aces.s3.amazonaws.com/${imageKey.key}`;
    };

    const fetchDescription = async descriptionKey => {
      const s3 = new AWS.S3();
      const params = {
          Bucket: 'combat-aces',
          Key: `descriptions/${descriptionKey}`
      };

      try {
          const data = await s3.getObject(params).promise();
          const paragraphs = data.Body.toString('utf-8').split('\n');
          const formattedData = paragraphs.map(p => `<p>${p}</p>`).join('');
          setDescription(formattedData);
      } catch (error) {
          console.error('Error fetching description from S3:', error);
          setDescription('Description not available');
      }
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
                                {movie.images && <img src={getImageUrl(movie.images[0])} className="img-responsive" alt={movie.name} />}
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
                                {movie.images && <img src={getImageUrl(movie.images[0])} className="move-poster img-responsive" alt={movie.name} />}
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
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                <div className="container-fluid">
                    <div className="row">
                        <div>
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
                                <div className="js-description" dangerouslySetInnerHTML={{ __html: description }} />
                                <div className="js-images">
                                    <ImageGallery images={selectedMovie.images} movieName={selectedMovie.name} />
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