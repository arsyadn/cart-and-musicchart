import Logo from '../../assets/logo.svg';
import './Header.css'
const Header = () => {
    return(
        <>
        <div className="header-wrapper">
            <div className="container header">
                <img
                src={Logo}
                alt="logo"
                />
            </div>
        </div>
        </>
    )
}
export default Header;