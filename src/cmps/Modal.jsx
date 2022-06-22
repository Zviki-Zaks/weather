import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useFormRegister'
import { setIsModal, setModalResult } from '../store/actions/weatherActions'
import { Input } from './Input'

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
    return (
        <>
            <div className="dark-screen" onClick={funcs.toggleModal}>
                <section onClick={(ev) => ev.stopPropagation()} className="modal">
                    <p className="txt">{text}</p>
                    {/* <Input type={fields} handleChange={handleChange} /> */}
                    <input type="number" {...register(type)} />
                    <div className="action-container">

                        <button onClick={funcs.toggleModal}>cancel</button>
                        <button onClick={onAction}>{action}</button>
                    </div>
                </section>
            </div>
        </>
    )
}
