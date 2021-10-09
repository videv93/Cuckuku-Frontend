import {useContext} from "react";
import ModalContext from "../contexts/Modal.context";

export default function useModal() {
  const modalContext = useContext(ModalContext);
  return modalContext;
}