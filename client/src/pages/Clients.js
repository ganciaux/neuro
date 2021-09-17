import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clients = () => {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        const fetchClients = async() => {
        await axios({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}clients`,
                withCredentials: true,
            }).then((res) => {
                console.log(res)
                setClients(res.data)
            }).catch((err) => { console.log(err); })
        }
    }, [clients])

  return (
    <div>
        Hello depuis Client
    </div>
  );
}

export default Clients;