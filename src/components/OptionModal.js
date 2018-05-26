import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
const OptionModal = (props)=> (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            className="modal"
            closeTimeoutMS={200}
            contentLabel="Selected Option">
            <div>
                <h3 className="modal__title">Selected Option</h3>
                {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
                <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
            </div>
        </Modal>
        );
export default OptionModal;