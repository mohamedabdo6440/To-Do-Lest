import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import AddRecord from '../AddRecord'
import style from './modal.module.css'


//React Overley
const Overley = ({ close }) => {
    return (
        <div className={style.overley} onClick={close}></div>
    )
}

//Record component
const Record = ({ addNewRecord, close }) => {
    return (
        <div className={style.record}>
            <h3>All Data</h3>
            <div className=''>
                <AddRecord addNewRecord={addNewRecord} close={close} />
            </div>
        </div>
    )
}


//parent module [Overley , Record]
const Modal = ({ showModel, close, addNewRecord }) => {
    return (

        // Handele showModel visabele
        showModel ? (
            <div>

                {
                    ReactDom.createPortal(<Fragment>
                        <Overley close={close} />
                        <Record addNewRecord={addNewRecord} close={close} />
                    </Fragment>, document.getElementById('modal'))
                }

            </div>
        ) : ""
    )
}

export default Modal
