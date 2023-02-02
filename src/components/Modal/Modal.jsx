import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import { Div } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({toggleModal, modalPict}) {
    useEffect(() => {
        window.addEventListener('keydown', hendleKeydown);
        return ()=> window.removeEventListener('keydown', hendleKeydown);
    });

    const hendleKeydown = (e) => {
        console.log(e.code);
        if (e.code === 'Escape') toggleModal();
    };
    const hendleBackdropClick = e => {
        if (e.currentTarget === e.target) toggleModal();
    };


    return createPortal(
        <Div onClick={hendleBackdropClick}>
            <div>
                <img src={modalPict.largeImageURL } alt={modalPict.tags} />
            </div>
        </Div>,
        modalRoot,
    );

};
Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    modalPict: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
};
