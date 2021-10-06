import { useParams, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query"
import { getClient, updateClient } from "../../api";
import Loader from "react-loader-spinner";
import { ClientsForm } from "../../components/ClientsForm";

export const ClientUpdate = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data, error, isLoading, isError } = useQuery(["clients", { id }, updateClient]);
    const {mutateAsync, isLoading: isMutating } = useMutation(ClientUpdate)
    const onFormSubmit = async (data) => {
        await mutateAsync({ ...data, id })
        history.push("/")
    }

    if (isLoading){
        return <Loader type="ThreeDots" color="#ccc" height={30}/>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    return <ClientsForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={ isMutating}></ClientsForm>;
}
