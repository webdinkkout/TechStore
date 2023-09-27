import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'

const cx = classNames.bind(styles)

function Input({ type = 'text', placeholder = 'Insert your values...', onChange }) {
  return (
    <input type={type} placeholder={placeholder} className={cx('input')} onChange={(e) => onChange(e.target.value)} />
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string
}
export default Input
