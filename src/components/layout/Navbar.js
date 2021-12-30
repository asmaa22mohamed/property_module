import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const [colnavbar, setColNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80 || window.innerWidth < 992) {
      setColNavbar(true);
    } else {
      setColNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });
  return (
    <>
      <nav
        className={
          colnavbar
            ? 'navBar navbar navbar-expand-lg color'
            : 'navBar navbar navbar-expand-lg'
        }
      >
        <div className='container fixed'>
          <NavLink className='navbar-brand' to='/addProperty'>
            <div className='navBar__image'>Property</div>
          </NavLink>
          <button
            className='custom-toggler navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExample09'
            aria-controls='navbarsExample09'
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label='Toggle navigation'
            onClick={handleNavCollapse}
          >
            <span className='navbar-toggler-icon'>
              <i className='fas fa-bars'></i>
            </span>
          </button>
          <div
            className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          >
            <ul className='navBar__list navbar-nav' id='navbarsExample09'>
              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link navBar__list__item__link--active nav-link'
                  aria-current='page'
                  to='/addProperty'
                >
                  AddProperty
                </NavLink>
              </li>

              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/propertyListing'
                >
                  PropertyListing
                </NavLink>
              </li>
              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/favoritesPage'
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
