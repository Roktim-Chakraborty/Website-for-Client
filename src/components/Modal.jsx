
import { FaTimes } from "react-icons/fa6";

function Modal({ isVisible, onClose, content }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-96 relative">
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default Modal;
