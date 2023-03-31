import { Outlet, Link } from "react-router-dom";
import './Layout.css'


// On ajoute les liens ici 

const Layout = () => {
    return (
      <>
        <nav className="main-nav">
            
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/form">Formulaire</Link>
            </li>
          </ul>
        
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;