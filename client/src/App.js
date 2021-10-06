import Routes from './components/Routes';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
