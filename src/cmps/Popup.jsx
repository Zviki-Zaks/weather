import React from 'react'

export const Popup = ({ type, funcs }) => {
    return (
        <>
            <div className="dark-screen" onClick={funcs.togglePopup}>
                <section onClick={(ev) => ev.stopPropagation()} className="popup">
                    <button onClick={funcs.onClick}>click</button>
                </section>
            </div>
        </>
    )
}
