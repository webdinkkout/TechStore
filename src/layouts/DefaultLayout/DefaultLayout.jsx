import classNames from 'classnames/bind'
import { PropTypes } from 'prop-types'
import Header from '../../components/Header'
import styles from './DefaultLayout.module.scss'
import Button from '../../components/Button'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <>
      <div className='container'>
        <Header />
        <main className={cx('main')}>{children}</main>
      </div>

      <footer className={cx('footer')}>
        <div className='container'>
          <div className={cx('footer__top')}>
            <div className={cx('footer__left')}>
              <p>Sign Up To Our Newsletter.</p>
              <span>Be the first to hear about the latest offers.</span>
            </div>
            <div className={cx('footer__right')}>
              <input type='text' placeholder='Your Email' className={cx('footer__input')} />
              <Button width={151} height={50}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className={cx('footer__bot')}>
            <ul className={cx('footer__about')}>
              <p className={cx('footer__title')}>Information</p>

              <li className={cx('footer__item')}>About Us</li>
              <li className={cx('footer__item')}>About Zip</li>
              <li className={cx('footer__item')}>Privacy Policy</li>
              <li className={cx('footer__item')}>Search</li>
              <li className={cx('footer__item')}>Terms</li>
              <li className={cx('footer__item')}>Orders and Returns</li>
              <li className={cx('footer__item')}>Contact Us</li>
              <li className={cx('footer__item')}>Advanced Search</li>
              <li className={cx('footer__item')}>Newsletter Subscription</li>
            </ul>
            <ul className={cx('footer__about')}>
              <p className={cx('footer__title')}>PC Parts</p>

              <li className={cx('footer__item')}>CPUS</li>
              <li className={cx('footer__item')}>Add On Cards</li>
              <li className={cx('footer__item')}>Hard Drives (Internal)</li>
              <li className={cx('footer__item')}>Graphic Cards</li>
              <li className={cx('footer__item')}>Keyboards / Mice</li>
              <li className={cx('footer__item')}>Cases / Power Supplies / Cooling</li>
              <li className={cx('footer__item')}>RAM (Memory)</li>
              <li className={cx('footer__item')}>Software</li>
              <li className={cx('footer__item')}>Speakers / Headsets</li>
              <li className={cx('footer__item')}>Motherboards</li>
            </ul>
            <ul className={cx('footer__about')}>
              <p className={cx('footer__title')}>Desktop PCs</p>

              <li className={cx('footer__item')}>Custom PCs</li>
              <li className={cx('footer__item')}>Servers</li>
              <li className={cx('footer__item')}>MSI All-In-One PCs</li>
              <li className={cx('footer__item')}>HP/Compaq PCs</li>
              <li className={cx('footer__item')}>ASUS PCs</li>
              <li className={cx('footer__item')}>Tecs PCs</li>
            </ul>
            <ul className={cx('footer__about')}>
              <p className={cx('footer__title')}>Laptops</p>

              <li className={cx('footer__item')}>Evryday Use Notebooks</li>
              <li className={cx('footer__item')}>MSI Workstation Series</li>
              <li className={cx('footer__item')}>MSI Prestige Series</li>
              <li className={cx('footer__item')}>Tablets and Pads</li>
              <li className={cx('footer__item')}>Netbooks</li>
              <li className={cx('footer__item')}>Infinity Gaming Notebooks</li>
            </ul>
            <ul className={cx('footer__about')}>
              <p className={cx('footer__title')}>Address</p>

              <li className={cx('footer__item')}>Address: 1234 Street Adress City Address, 1234</li>
              <li className={cx('footer__item')}>Phones: (00) 1234 5678</li>
              <li className={cx('footer__item')}>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
              <li className={cx('footer__item')}>Friday: 9:00 AM - 6:00 PM</li>
              <li className={cx('footer__item')}>Saturday: 11:00 AM - 5:00 PM</li>
              <li className={cx('footer__item')}>E-mail: shop@email.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
