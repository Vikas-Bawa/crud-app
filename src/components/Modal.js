import React from 'react'

function Modal({handleClose,content}) {
  return (
    <div className="popup-box">
            <div className="box">
                <span onClick={handleClose} className="close-icon">x</span>
                <div className='container w-75'>
                    {content}
                </div>
            </div>
        </div>
  )
}

export default Modal
