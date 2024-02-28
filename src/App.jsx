import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components"; // Styled Components importieren
import AdvertisementGenerator from "../components/Artikelbeschreibung";
import Welcome from "../components/Welcome";

// Styled Components für die Navbar erstellen
const Navbar = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <NavList>
            <NavItem>
              <NavLink to="/">Welcome</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/artikelbeschreibung">Artikelbeschreibung</NavLink>
            </NavItem>
            {/* Hier könnten weitere Links hinzugefügt werden */}
          </NavList>
        </Navbar>

        <Routes>
          <Route index path="/" exact element={<Welcome />} />
          <Route
            path="/artikelbeschreibung"
            element={<AdvertisementGenerator />}
          />
          {/* Hier weitere Routen hinzufügen, falls benötigt */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
