import { useState, useEffect } from 'react';

const Quote = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'http://api.quotable.io/random?maxLength=151'
            );

            const data = await response.json();
            setData(data);
        };

        fetchData()
            .catch(console.error);
    }, []);

    const Quote = () => {
        return (
            <div className="quote">
                <blockquote className='quote-content'>&ldquo;{data.content}&rdquo;</blockquote>
                <p className='quote-author'>&mdash; {data.author}</p>
            </div>
        );
    }

    return ( 
        <>
        {data.content && <Quote />}
        </>
     );
}
 
export default Quote;