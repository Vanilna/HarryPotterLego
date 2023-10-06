import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';

import Router from '@/navigation/Router';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
