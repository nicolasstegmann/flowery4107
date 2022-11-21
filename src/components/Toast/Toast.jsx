import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastOffSet = (msg, type = 'default', autocloseTime = 1000) => {
    if (['error', 'info', 'success', 'warning'].includes(type.toLowerCase())) {
        toast[type.toLowerCase()](msg, {autoClose: autocloseTime})
    } else {
        toast(msg)
    }
}

export const Toast = () => {

    return (
        <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"                
    />
    )
}