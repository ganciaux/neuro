import React from 'react'
import {useQuery} from 'react-query'
import * as api from '../../clientsAPI'

export const QueryClientDetails = ({id}) => {
    
    const {data: client, isLoading, isError, error} = useQuery(['clients', id], () => api.getClient(id))
    
    if (!id)
        return 'select a client'
        
    if (isLoading)
        return 'Loading client...';
    
    if (isError)
        return 'Something went wrong...';

    return (
        <div>
            {client.name}
        </div>
    )
}
