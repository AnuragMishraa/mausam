import React from 'react'
import { Navbar,Container} from 'react-bootstrap'
import '../style/header.css'

const Header = () => {
  return (
    <header>
      {/* <section id="banner"> */}

      <Navbar bg="primary" expand="lg">
        <Container>
          <a href="/" className="navbar-brand text-white">
            Mausam <i class="fa-solid fa-cloud"></i>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <a className="nav-link text-white disabled" href="../help">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white disabled" href="">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/AnuragMishraa">
                  <a
                    target="_blank"
                    rel="noopener"
                    className="nav-link text-white disabled"
                    href=""
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/anurag-mishra-840619217/">
                  <a
                    target="_blank"
                    rel="noopener"
                    className="nav-link text-white disabled"
                    href=""
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                </a>
              </li>
              <button type="button" class="btn btn-primary">
                {" "}
                Login <i className="fa-solid fa-user px-1"></i>
              </button>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </section> */}
    </header>
  );
}

export default Header
