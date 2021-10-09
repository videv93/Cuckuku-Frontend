import ModalContext from "./Modal.context";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
export default function ModalProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')
  const handleClose = () => {
    setShowModal(false);
  }
  const openModal = (message) => {
    setMessage(message);
    setShowModal(true);
  }
  return (
    <ModalContext.Provider value={{openModal}}>
      {children}
      {showModal && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </ModalContext.Provider>
  )
}