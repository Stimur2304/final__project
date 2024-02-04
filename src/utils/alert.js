import {toast} from "react-toastify";
import Alert from "../components/ReactImage/Alert/Alert";

const showInfo = (title, message) => {
    toast.info(
        <Alert
            title={title}
            message={message}
        />
    )
}

export  {
    showInfo
}