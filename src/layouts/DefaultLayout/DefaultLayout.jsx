import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '../../components/Header'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className='container'>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
