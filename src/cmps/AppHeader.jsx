import { NavLink, Link } from "react-router-dom"

export const AppHeader = () => {

    return (
        <section className="app-header">
            <div className="container header-content">
                <h1 className="logo" >Logo</h1>
                <nav className="app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/forecast">Forecast</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
        </section>
    )
}
