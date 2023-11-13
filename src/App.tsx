import "./App.css";
import { Header } from "./components/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./screens/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
