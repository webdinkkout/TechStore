import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <>
      <header className={cx('header')}>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
