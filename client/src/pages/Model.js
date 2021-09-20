import React, { useEffect, useState } from 'react';

const Model = ({title, model}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/clients")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data.data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
        <div>
            title:{title} / Model: {model}
            <ul>
                {items.map(item => (
                <li key={item.name}>
                    {item.name} {item.firstname}
                </li>
                ))}
            </ul>
        </div>
        
        );
    }
}

export default Model;