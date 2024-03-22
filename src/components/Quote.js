import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';

const Quote = () => {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch('../quotes.yaml'); // Adjust the path as per your project structure
                const data = await response.text();
                const quotes = yaml.load(data);
                const randomIndex = Math.floor(Math.random() * quotes.length);
                setQuote(quotes[randomIndex]);
            } catch (error) {
                console.error("Error fetching quotes:", error);
            }
        };

        fetchQuotes();
    }, []);

    return (
        <div className="masthead-subheading">
            "{quote.text}"
            <br/>
            - {quote.author}
        </div>
    );
};
export default Quote;
