import classNames from 'classnames/bind'
import { FaSearch, FaCartPlus } from 'react-icons/fa'

import Nav from '../Nav'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('header__left')}>
        <img src='/images/Logo.png' alt='logo' />
        <Nav />
      </div>
      <div className={cx('header__right')}>
        <button className={cx('header__icon')}>
          <FaSearch />
        </button>
        <button className={cx('header__icon')}>
          <FaCartPlus />
        </button>
        <button className={cx('header__avatar')}>
          <img src='/images/avatar.png' alt='avatar' />
        </button>
      </div>
    </header>
  )
}

export default Header
