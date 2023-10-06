import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from '@/navigation/Router';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
