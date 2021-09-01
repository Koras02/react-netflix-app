import "../../styles/HeaderStyles.css";


function NavBar({ children, ...restProps }) {
    return <nav {...restProps}>{children}</nav>
}

export default NavBar;