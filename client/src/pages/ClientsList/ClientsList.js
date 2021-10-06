import { useQuery } from "react-query"
import { getAllClients } from "../../api";
import Loader from "react-loader-spinner"
import { ClientsCard } from "./ClientsCard";

export const ClientsList = () => {
    const {data, error, isLoading, isError } = useQuery("clients", getAllClients)
    
    if (isLoading){
        return <Loader type="ThreeDots" color="#ccc" height={30}/>
    }

    if (isError){
        return <span>ERROR: { error.message }</span>
    }
    
    return <div>
        {data.data.map((client) => { return <ClientsCard key={ client._id } client={client}></ClientsCard>})}
    </div>;
}