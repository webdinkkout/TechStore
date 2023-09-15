import classNames from 'classnames/bind'

import Nav from '../Nav'
import Button from '~/components/Button'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('header__left')}>
        <img src='/images/Logo.png' alt='logo' />
        <Nav />
        <Button outline>Our Deals</Button>
      </div>
    </header>
  )
}

export default Header
