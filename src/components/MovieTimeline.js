import React from 'react';

const MovieTimeline = ({ movies }) => {

  const categorizeMovies = (movies) => {
    const categories = {
      veryAccurate: [],
      accurate: [],
      modestAccuracy: [],
      pureFiction: []
    };

    // Check if movies array is not empty before calling forEach
    if (movies && movies.length) {
      movies.forEach(movie => {
        if (movie.accuracy >= 7) {
          categories.veryAccurate.push(movie);
        } else if (movie.accuracy >= 5) {
          categories.accurate.push(movie);
        } else if (movie.accuracy >= 2) {
          categories.modestAccuracy.push(movie);
        } else {
          categories.pureFiction.push(movie);
        }
      });
    }

    return categories;
  };

  const sortedMovies = categorizeMovies(movies);

  // Define categoryImages here
  const categoryImages = {
    veryAccurate: '../assets/img/the-longest-day.jpg',
    accurate: '../assets/img/band-of-brothers.jpg',
    modestAccuracy: '../assets/img/pearl-harbor.jpg',
    pureFiction: '../assets/img/tripoli.jpg',
  };

  return (
    <section id="content" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Historical Accuracy</h2>
            <h3 className="section-subheading text-muted">
              <p>Here you will find a list of the movies depicted on this website and the trends of the importance of historical accuracy in World War II films.</p>
              <p>The most accurate movies were produced during the early to mid Cold War era(with exception to Band of Brothers)whereas the least accurate movies have been more recent movies.</p>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {Object.entries(sortedMovies).map(([category, movies]) => (
                <li key={category} className={category === 'pureFiction' ||  category === 'accurate'? 'timeline-inverted' : ''}>
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src={categoryImages[category]} alt={category} />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{category === 'veryAccurate' ? 'Very Accurate' : category === 'accurate' ? 'Accurate' : category === 'modestAccuracy' ? 'Modest Accuracy' : 'Pure Fiction'}</h4>
                    </div>
                    <div className="timeline-body">
                      {movies.map((movie, index) => (
                        <p key={index} className="text-muted">{movie.name} ({movie.year})</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieTimeline;
