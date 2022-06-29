import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(sublinks);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((sublink) => sublink.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  const closeOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <AppContext.Provider
      value={{
        data,
        openSubMenu,
        closeSubMenu,
        closeOpenSidebar,
        isSidebarOpen,
        isSubMenuOpen,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
