import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query";
import { removeClient } from "../../api";
import Loader from "react-loader-spinner"

export const ClientsCard = ({ client }) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(removeClient)
    
    const remove = async () => {
        await mutateAsync(client._id)
        queryClient.invalidateQueries("clients")
    }

    return <div>
        <Link to={`/clients-update/${client._id}`}>{client.name}</Link>
        <button onClick={remove}>
            { isLoading ? <Loader type="ThreeDots" color="#fff"/> : "remove" }
        </button>
    </div>;
}