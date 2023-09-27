import classNames from 'classnames/bind'
import styles from './CardIntroduce.module.scss'

const cx = classNames.bind(styles)

function CardIntroduce({ img, desc, date }) {
  return (
    <div className={cx('introduce')}>
      <img src={img} alt='' />
      <p className={cx('introduce__desc')}>{desc}</p>
      <p className={cx('introduce__date')}>{date}</p>
    </div>
  )
}

export default CardIntroduce
