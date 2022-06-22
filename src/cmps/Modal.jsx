import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useFormRegister'
import { setIsModal, setModalResult } from '../store/actions/weatherActions'

export const Modal = ({ type, funcs, text }) => {
    const action = 'Ok'
    const [register, setFields] = useForm({
        [type]: ''
    })
    const dispatch = useDispatch()
    const onAction = () => {
        dispatch(setModalResult(register(type).value))
        dispatch(setIsModal())
    }
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()

    }, [])

    return (
        <>
            <div className="dark-screen" onClick={funcs.toggleModal}>
                <section onClick={(ev) => ev.stopPropagation()} className="modal">
                    <p className="txt">{text}</p>
                    <input ref={inputRef} type="number" {...register(type)} />
                    <div className="action-container">

                        <button className="cancel-btn" onClick={funcs.toggleModal}>cancel</button>
                        <button className="action-btn" onClick={onAction}>{action}</button>
                    </div>
                </section>
            </div>
        </>
    )
}
