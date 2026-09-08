
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './routes/AppRoutes.jsx'
import {Provider} from "react-redux"
import { Store } from './app/Store.jsx'
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root')).render(
  <Provider store={Store} >
    <AppRoutes />
    <ToastContainer/>
  </Provider>
)
