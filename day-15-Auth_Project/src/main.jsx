
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyRoutes from './Routes/MyRoutes.jsx'
import { CreateProvider } from './Context/AuthContext.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <CreateProvider>
        <MyRoutes />
        <ToastContainer/>
    </CreateProvider>
)
 