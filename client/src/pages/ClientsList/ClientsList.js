import { useQuery } from "react-query"
import { getAllClients } from "../../api";
import Loader from "react-loader-spinner"

export const ClientsList = () => {
    const {data, error, isLoading, isError } = useQuery("clients", getAllClients)
    
    if (isLoading){
        return <Loader type="ThreeDots" color="#ccc" height={30}/>
    }

    return null;
}