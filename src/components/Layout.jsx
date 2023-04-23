import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to="/" >Home page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dogs">Collection</NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>FOOTER</footer>
        </>
    )
};

export default Layout;