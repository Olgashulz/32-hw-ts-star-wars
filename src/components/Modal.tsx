import React from 'react';
interface Props {
    setShowModal: (state:boolean)=>void
    heroId?: string
    children: React.ReactNode
    setIsLoading:(state:boolean)=>void
}
const Modal = ({setShowModal, heroId, setIsLoading}:Props) => {

    const handleCloseModal = () => {
        setShowModal(false);
        setIsLoading(true);
    }

    return (
        <div className="modal">
            <div className="modal-content">
               <p>Could not find hero with name {heroId}.</p>
                <button className="btn_close" onClick={handleCloseModal}>X</button>
            </div>
        </div>
    );
}
export default Modal;