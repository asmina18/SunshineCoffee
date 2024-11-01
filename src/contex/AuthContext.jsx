import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import af prop-types til validering
import axios from 'axios'; // Import af axios til HTTP-anmodninger

// Opretter en kontekst til autentifikation
export const AuthContext = createContext();

// AuthProvider-komponent, der tilbyder autentifikationsfunktioner og tilstand
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Holder autentifikationstilstanden

  // Henter autentifikationstilstand fra localStorage ved første indlæsning
  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  // Funktion til login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8081/sign-in', { email, password });
      if (response.status === 200) { // Tjekker om login lykkedes
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
      } else {
        alert('Login mislykkedes. Tjek dine oplysninger.');
      }
    } catch (error) {
      console.error('Login fejlede:', error);
      alert('Login mislykkedes. Prøv igen.');
    }
  };

  // Funktion til signup
  const signup = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8081/sign-up', { email, password });
      if (response.status === 200) { // Tjekker om signup lykkedes
        alert('Signup succesfuld! Du kan nu logge ind.');
      } else {
        alert('Signup mislykkedes. Prøv igen.');
      }
    } catch (error) {
      console.error('Signup fejlede:', error);
      alert('Signup mislykkedes. Prøv igen.');
    }
  };

  // Funktion til logout
  const logout = () => {
    localStorage.removeItem('isAuthenticated'); // Fjerner autentifikationsstatus
    setIsAuthenticated(false); // Opdaterer tilstanden
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children} {/* Renders child-komponenterne */}
    </AuthContext.Provider>
  );
}

// Validering af typen af children-prop
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
