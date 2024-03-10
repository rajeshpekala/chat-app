
import ReactDOM from 'react-dom/client'

import './index.css'
import { appRouter } from './App.jsx'
import { RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
