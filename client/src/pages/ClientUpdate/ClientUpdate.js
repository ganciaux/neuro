import { useParams, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query"
import { getClient, updateClient } from "../../api";
import Loader from "react-loader-spinner";
import { ClientsForm } from "../../components/ClientsForm";

export const ClientUpdate = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data, error, isLoading, isError } = useQuery(
        ["clients", { id }],
         getClient);

    const {mutateAsync, isLoading: isMutating } = useMutation(updateClient)

    const onFormSubmit = async (data) => {
        console.log("Before mutateAsync ")
        await mutateAsync({ ...data, id })
        history.push("/clients-list")
    }

    if (isLoading){
        return <Loader type="ThreeDots" color="#ccc" height={30}/>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    return <ClientsForm defaultValues={data.data} onFormSubmit={onFormSubmit} isLoading={ isMutating}></ClientsForm>;
}
