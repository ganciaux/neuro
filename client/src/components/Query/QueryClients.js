import React from 'react'
import {useQuery} from 'react-query'
import * as api from '../../clientsAPI'

export const QueryClients = ({setClientId}) => {
    const {data, isLoading, isError, error} = useQuery('clients', api.getClients)
    
    if (isLoading)
        return 'Loading client...';
    
    if (isError)
        return 'Something went wrong...';

    return (
        <div>
            <ul>
                {data?.map(client => {return (
                    <li key={client._id}>
                        {client.name}
                        <button onClick={()=>setClientId(client._id)}>view</button>
                    </li>
                    )})}
            </ul>
        </div>
    )
}
