import FS from '../../../app/assets/img/honorFullStack.png';

const Modal = ({ openFullStackModal, children }) => {

    if (!openFullStackModal) return null

    return (
        <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <img src={FS} alt='Full Stack Honor Certificate' />
            </div>
        </div>
    )
};

export default Modal;