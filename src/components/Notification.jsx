// import React from 'react'
import './Notification.css'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai"


const iconStyle = { marginRight: "10px" }
const icons = {
    success: <AiOutlineCheckCircle style={iconStyle} />,
    info: <AiOutlineInfoCircle style={iconStyle}/>,
    warning: <AiOutlineWarning style={iconStyle}/>,
    error: <AiOutlineCloseCircle style={iconStyle}/>
}

const Notification = ({ type, message, onClose = () => { } }) => {
    return (
        <div className={`notification ${type}`}>
            {icons[type]}
            {message}
            <AiOutlineCloseCircle color="white" onClick={() => onClose()} className='closeBtn' />
        </div>
    );
};

Notification.defaultProps = {
    type: "info",
};

export default Notification