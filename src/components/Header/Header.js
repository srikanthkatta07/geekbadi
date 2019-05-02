import React from 'react';
import menuData from '../../data/menu';

function scroll(pageId, speed) {
  const toElement = document.getElementById(pageId);
  const hederHeight = document.getElementById('header').clientHeight;
  var windowObject = window;
  var windowPos = windowObject.pageYOffset;
  var elemOffset = toElement.offsetTop - hederHeight;

  var counter = setInterval(function() {
    if (windowPos > elemOffset) {
      windowObject.scrollTo(0, windowPos);
      windowPos -= speed;

      if (windowPos <= elemOffset) {
        clearInterval(counter);
        windowObject.scrollTo(0, elemOffset);
      }
    } else {
      windowObject.scrollTo(0, windowPos);
      windowPos += speed;

      if (windowPos >= elemOffset) {
        clearInterval(counter);
        windowObject.scrollTo(0, elemOffset);
      }
    }
  }, 1);
}

function Header() {
  return (
    <header id='header'>
      <div className='site-restrict'>
        <a href='/' className='logo float-left pointer'>
          <span className='prefix lato-bold'>GEEK</span>
          <span className='sufix lato-bold'>BADI</span>
        </a>
        <nav className='web float-right'>
          <ul>
            {menuData.map(menuItem => {
              return (
                <li
                  className='inline-block font-18 pointer'
                  onClick={() => scroll(menuItem.id, 4)}
                >
                  <a
                    href='/'
                    onClick={event => {
                      event.preventDefault();
                    }}
                  >
                    {menuItem.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='clear' />
      </div>
    </header>
  );
}

export default Header;
