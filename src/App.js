import "./styles.css";
import { Paginated } from "./Paginated";
import { QueryClient, QueryClientProvider } from "react-query";
export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <h1>Hello,this is Server Side Pagination using useTable and useQuery</h1>

      <QueryClientProvider client={queryClient}>
        <Paginated />
      </QueryClientProvider>
    </div>
  );
}
