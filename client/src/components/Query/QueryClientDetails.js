import React, {useState} from 'react'
import { QueryClient } from 'react-query'
import {useQuery} from 'react-query'
import * as api from '../../clientsAPI'
import { QueryClientForm } from './QueryClientForm'

export const QueryClientDetails = ({id}) => {
    const [isEditing, setIsEditing] = useState(false)
    const { data: client, isLoading, isFetching, isError, error } = useQuery(
        ['clients', id],
        () => api.getClient(id),
        {enabled: Boolean(id)})
    
    if (!id)
        return 'select a client'
        
    if (isLoading)
        return 'Loading client...';
    
    if (isError)
        return 'Something went wrong...';

    return (
        <div>
            {isFetching && <span>Background fetching</span>}
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "CANCEL" : "EDIT"}</button>
            {isEditing ? <QueryClientForm clientData={client} setIsEditing={ setIsEditing }/> : <h2>{ client.name }</h2>}
        </div>
    )
}
