import './Navbar.css'


const Navbar = (props) => {
    return ( 

    <ul>
        <li><a href='google.com'>Home</a></li>
        <li><a href='google.com'>About us</a></li>
        <li><a href='google.com'>Projects</a></li>
        <li> 
            <div className="dropdown">      
                <a href="google.com" className="dropbtn">Products</a>
                    <div className="dropdown-content">
                        <a href="google.com">Type 1</a>
                        <a href="google.com">Type 2</a>
                        <a href="google.com">Type 3</a>
                    </div>
            </div>        
        </li>
        <li className='brand-name'><a href='google.com'>{props.children}</a></li>
    </ul>
    

    )

}

export default Navbar