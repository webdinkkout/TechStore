import classNames from 'classnames/bind'
import styles from './Col.module.scss'

const cx = classNames.bind(styles)

function Col({ children, span }) {
  return (
    <div
      className={cx('col', {
        [`span-${span}`]: !!span
      })}
    >
      {children}
    </div>
  )
}

export default Col
