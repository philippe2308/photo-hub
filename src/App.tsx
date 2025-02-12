import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./route";
import { UserProvider } from "./context/user-context";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
