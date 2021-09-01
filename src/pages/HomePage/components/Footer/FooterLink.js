import './FooterStyles.css';


function FooterLink({ children, ...restProps}) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="footer-link" {...restProps}>
            {children}
        </a>
    )
}

export default FooterLink;