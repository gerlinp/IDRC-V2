import React from 'react';
import { Nav } from 'react-bootstrap';
import SearchForm from "./SearchForm";

const Navigation = () => {
  return (
    <>

    
        <div id="nav" className="fixed-top" bg="light" expand="lg">
            <div className="nav-parent center">
                <div className='nav-container'>
                    <Nav className="nav" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                            <Nav.Item>
                                <Nav.Link className="logo" href="/home">IDRC</Nav.Link>
                            </Nav.Item>
                            <ul className="nav-right">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">EXAMS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">ADMIN</Nav.Link>
                                </Nav.Item>
                            </ul>
                    </Nav>
                </div>
            </div>
            <div className='center'>
                <SearchForm/>
            </div>
        </div>
    </>
   
  )
}

export default Navigation