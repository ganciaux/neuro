import React, { useState} from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as api from '../../clientsAPI'

export const QueryClientForm = ({clientData, setIsEditing}) => {
    const [fields, setFields] = useState(clientData);
    const { isLoading, mutate } = useMutation(api.updateClient, {
        onMutate: (updatedClient) => {
            QueryClient.setQueriesData(['clients', fields], updatedClient);
            setIsEditing(false);
        },
        onSuccess: () => {
            QueryClient.invalidateQueries('clients');
        } 
    });

    /*
    const { isLoading, mutate } = useMutation(api.updateClient, {
        onSuccess: (data) => {
            QueryClient.setQueriesData(['clients', clientData._id], data);
            setIsEditing(false);
        } 
    });
    */
    const QueryClient = useQueryClient();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, firstname, email } = fields;
        const id = fields._id;
        mutate({id, name, firstname, email});    }

    if (isLoading)
        return 'Saving your change';
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                name="name"
                onChange={handleChange}
                value={ fields.name}
            />
            <input
                name="firstname"
                onChange={handleChange}
                value={ fields.firstname}
            />
            <input
                name="email"
                onChange={handleChange}
                value={ fields.email}
            />
            <button>Envoyer</button>
        </form>
    )
}
