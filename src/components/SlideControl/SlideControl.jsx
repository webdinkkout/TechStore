import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './SlideControl.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function SlideControl({ color, bgColor, next, previous, goToSlide, ...rest }) {
  return (
    <div className={cx('controls')}>
      <button
        style={{ color: color, backgroundColor: bgColor }}
        className={cx('controls__control', 'controls__control--left')}
        onClick={() => previous()}
      >
        <FaChevronLeft></FaChevronLeft>
      </button>

      <button
        style={{ color: color, backgroundColor: bgColor }}
        className={cx('controls__control', 'controls__control--right')}
        onClick={() => next()}
      >
        <FaChevronRight></FaChevronRight>
      </button>
    </div>
  )
}

export default SlideControl
