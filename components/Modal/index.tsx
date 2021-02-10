import Modal from 'react-modal';
import ImageIcon from '../ImageIcon';
const closeIcon = "/close.svg";

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    margin: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0.5rem 0.5rem 1.2rem rgba(0, 0, 0, 0.18)',
    height: '86vh'
  },
  rowEnd: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

interface ModalProps {
  closeModal: Function,
  modalIsOpen: Boolean,
  children: React.ReactNode,
}
Modal.setAppElement("body");
export default function ModalComponent({ closeModal, modalIsOpen, children }: ModalProps) {

  const withOverflowUnsetCloseModal = () => {
    window.document.body.style.overflow = 'unset';
    closeModal();
  }
  const setOverflowHidden = () => {
    window.document.body.style.overflow = 'hidden'
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={setOverflowHidden}
      onRequestClose={withOverflowUnsetCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={customStyles.rowEnd}>
        <ImageIcon onClick={withOverflowUnsetCloseModal} url={closeIcon} />
      </div>
      {children}
    </Modal>
  )
}