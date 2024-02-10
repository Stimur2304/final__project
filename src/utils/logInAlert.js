import {toast} from "react-toastify";
import AlertLogIn from "../components/ReactImage/Alert/alertLogIn";

const showInfoBack = () => {
    toast.error(
        <AlertLogIn/>
    )
}

export  {
    showInfoBack
}