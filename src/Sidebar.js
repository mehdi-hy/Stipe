import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';
const Sidebar = () => {
  const { closeOpenSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <article
      className={isSidebarOpen ? `sidebar-wrapper show` : `sidebar-wrapper`}
    >
      <div className='sidebar '>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <ul className='sidebar-sublinks'>
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <a href={link.url}>
                        {' '}
                        {link.icon}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}

        <button onClick={closeOpenSidebar} className='close-btn'>
          <FaTimes />
        </button>
      </div>
    </article>
  );
};

export default Sidebar;
