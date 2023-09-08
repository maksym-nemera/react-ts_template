import { FC } from 'react';
import './Header.scss';
import logo from '../../logo.svg';

export const Header: FC = () => {
  return (
    <header className='Header'>
      <img src={logo} className='Header__logo' alt='logo' />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className='Header__link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
};
