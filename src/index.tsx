import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './page/Dashboard';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Dashboard />
    </QueryClientProvider>
  </React.StrictMode>,
)

