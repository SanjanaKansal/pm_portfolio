import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PortfolioLayout } from '@/components/PortfolioLayout'
import { WhoAmIPage } from '@/pages/WhoAmIPage'
import { MyToolboxPage } from '@/pages/MyToolboxPage'
import { MutualFitPage } from '@/pages/MutualFitPage'
import { ContactMePage } from '@/pages/ContactMePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/who-am-i" replace />,
  },
  {
    path: '/who-am-i',
    element: <PortfolioLayout><WhoAmIPage /></PortfolioLayout>,
  },
  {
    path: '/my-toolbox',
    element: <PortfolioLayout><MyToolboxPage /></PortfolioLayout>,
  },
  {
    path: '/mutual-fit',
    element: <PortfolioLayout><MutualFitPage /></PortfolioLayout>,
  },
  {
    path: '/contact-me',
    element: <PortfolioLayout><ContactMePage /></PortfolioLayout>,
  },
])