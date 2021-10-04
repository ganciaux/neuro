import Routes from './components/Routes';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
     <QueryClientProvider client={queryClient}>
    <Routes />
     </QueryClientProvider>
  );
}

export default App;
