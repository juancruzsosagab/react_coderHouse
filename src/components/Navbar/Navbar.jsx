import './Navbar.css'


const Navbar = (props) => {
    return ( 

    <ul>
        <li><a href='google.com'>Home</a></li>
        <li><a href='google.com'>About us</a></li>
        <li><a href='google.com'>Projects</a></li>
        <li><a href='google.com'>Videos</a></li>
        <li class='brand-name'><a href='google.com'>{props.children}</a></li>
    </ul>
    

    )

}

export default Navbar