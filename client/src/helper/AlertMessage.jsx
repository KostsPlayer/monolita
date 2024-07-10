import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AlertMessage() {
  const toastMessage = (type, messages, position = "bottom-right") => {
    toast[type](messages, {
      position: position,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: "toast",
    });
  };

  return { toastMessage };
}
