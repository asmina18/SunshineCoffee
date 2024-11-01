import { Navigation } from '../comonents/Navigation/Navigation';
import { Footer } from '../comonents/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../comonents/Header/Header';

export const LayoutMain = () => {
  const location = useLocation();

  // Check om den aktuelle side er login siden
  const hideHeaderOnPages = ['/login']; // Tilføj flere stier, hvis der er andre sider, hvor headeren ikke skal vises
  const shouldHideHeader = hideHeaderOnPages.includes(location.pathname);

  return (
    <>

      <Navigation />
    <main>
      {/* Vis kun Header, hvis vi ikke er på login-siden */}
      {!shouldHideHeader && <Header />}
      <Outlet />
      <Footer />
    </main>



    </>
  );
};
