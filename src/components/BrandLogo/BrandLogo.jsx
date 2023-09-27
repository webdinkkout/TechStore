import classNames from 'classnames/bind'
import styles from './BrandLogo.module.scss'

const cx = classNames.bind(styles)

function BrandLogo({ logo }) {
  return (
    <div className={cx('wrapper')}>
      <img src={logo} alt='' />
    </div>
  )
}

export default BrandLogo
