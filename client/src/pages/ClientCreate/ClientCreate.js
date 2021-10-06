import { useMutation } from "react-query";
import { ClientsForm } from "../../components/ClientsForm";
import { createClient } from "../../api";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner"

export const ClientCreate = () => {
    const history = useHistory();
    const {mutateAsync, isLoading} = useMutation(createClient);

    const onFormSubmit = async (data) => {
        await mutateAsync(data);
        history.push("/")
    }

    if (isLoading){
        return <Loader type="ThreeDots" color="#ccc" height={30}/>
    }

    return <ClientsForm onFormSubmit={onFormSubmit} isLoading={ isLoading}></ClientsForm>;
}
