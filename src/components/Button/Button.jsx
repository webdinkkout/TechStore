import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ rounded, children, width, height, isLoading, disabled, outline, icon, order, onClick }) {
  return (
    <button
      className={cx('button', {
        rounded,
        loading: isLoading,
        disabled: disabled,
        outline,
        order
      })}
      style={{
        width: width ? `${width}px` : 'inherit',
        height: height ? `${height}px` : 'inherit'
      }}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading && <FaSpinner className={cx('spinner')} />}
      {!isLoading && (
        <>
          {icon}
          <span
            className={cx({
              order
            })}
          >
            {children}
          </span>
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  icon: PropTypes.node,
  order: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  rounded: true,
  isLoading: false,
  disabled: false,
  outline: false,
  order: false
}
export default Button
