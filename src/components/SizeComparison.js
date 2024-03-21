import React from 'react';

const SizeComparison = ({ movies }) => {
    return (
        <section id="size" className="bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Large versus Small casts</h2>
                        <h3 className="section-subheading text-muted">
                            <p>
                                Here you will find a list of the movies depicted on this website and how they portrayed the wars by either following a large group of soldiers or a small unit.
                            </p>
                            <p>
                                The larger cast movies were popular in the classic movies, with the exception of Band of Brothers (which was a ten hour marathon). The recent trend tends to focus on small groups of men. The size of the cast for The Longest day was astronomical...in the hundreds.
                            </p>
                        </h3>
                    </div>

                    <table className="text-center">
                        <tbody>
                            <tr><th><h5 className="text-center">Large Cast</h5></th></tr>
                            {movies.filter(movie => movie.size > 10).map(movie => (
                                <tr key={movie.name}><td className="text-muted">{movie.name} ({movie.year})</td></tr>
                            ))}

                            <tr><th><h5 className="text-center">Small Cast</h5></th></tr>
                            {movies.filter(movie => movie.size <= 10 && movie.size > 1).map(movie => (
                                <tr key={movie.name}><td className="text-muted">{movie.name} ({movie.year})</td></tr>
                            ))}

                            <tr><th><h5 className="text-center">Followed One Person</h5></th></tr>
                            {movies.filter(movie => movie.size === 1).map(movie => (
                                <tr key={movie.name}><td className="text-muted">{movie.name} ({movie.year})</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SizeComparison;
