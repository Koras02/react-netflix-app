// eslint-disable-next-line 
import "./FooterStyles.css";


function FooterTitle({ children, ...restProps}) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="footer-title" {...restProps}>
             {children}
        </a>
    )
}

export default FooterTitle;