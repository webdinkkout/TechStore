import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Nav.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function Nav() {
  return (
    <nav className={cx('nav')}>
      <ul className={cx('nav__list')}>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            Laptops
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            Desktop PCs
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            Networking Devices
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            Printers & Scanners
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            PC Parts
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            All Other Products
          </a>
        </li>
        <li className={cx('nav__item')}>
          <a className={cx('nav__link')} href='#'>
            Repairs
          </a>
        </li>
        <li className={cx('nav__item')}>
          <Button outline>Our Deals</Button>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {}
export default Nav
