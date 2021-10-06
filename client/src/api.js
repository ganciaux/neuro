export const getAllClients = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/clients`);

    if (!response.ok){
        throw new Error("Something went wrong.");
    }

    return response.json();
}

export const getClient = async ({ queryKey }) => {
    /* eslint-disable no-unused-vars */
    const [_key, { id }] = queryKey
    const response = await fetch(`${process.env.REACT_APP_API_URL}/clients/${id}`);

    if (!response.ok){
        throw new Error(response.json().message);
    }

    return response.json();
}

export const updateClient = async ({ id, ...data }) => {
        const body = {name: data.name, firstname: data.firstname};
        
        const response = await fetch(`${process.env.REACT_APP_API_URL}/clients/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
    });

    if (!response.ok){
        throw new Error(response.json().message);
    }

    return response.json();
}

export const removeClient = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/clients/${id}`, {
        method:"DELETE"
    });

    if (!response.ok){
        throw new Error(response.json().message);
    }

    return true;
}


export const createClient = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/clients/`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok){
        throw new Error(response.json().message);
    }

    return response.json();
}