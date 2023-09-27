import classNames from 'classnames/bind'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'
import Button from '../../../components/Button'
import { CartIcon } from '../../../components/Icons'

const cx = classNames.bind(styles)

function ProductItem({ img, rating, price, currentPrice, name, isCheck }) {
  return (
    <div className={cx('product')}>
      <div className={cx('product__top')}>
        {isCheck ? (
          <p className={cx('product__tag')}>
            <img src='images/Check.png' alt='' />
            <span>in stock</span>
          </p>
        ) : (
          <p className={cx('product__tag', { isCheck: !isCheck })}>
            <img src='images/phone.png' alt='' />
            <span>check availability</span>
          </p>
        )}

        <Link className={cx('product__img')} to={'#'}>
          <img src={img} alt='' />
        </Link>
      </div>
      <div className={cx('product__middle')}>
        <div className={cx('product__rating')}>
          <span>
            <FaStar className={cx('product__icon')}></FaStar>
            <FaStar className={cx('product__icon')}></FaStar>
            <FaStar className={cx('product__icon')}></FaStar>
            <FaStar className={cx('product__icon')}></FaStar>
            <FaStar className={cx('product__icon')}></FaStar>
          </span>
          <span>Reviews(4)</span>
        </div>
        <p className={cx('product__desc')}>{name}</p>
        {price && <p className={cx('product__price', 'product__price--old')}>${price} </p>}
        {currentPrice && <p className={cx('product__price', 'product__price--current')}>${currentPrice}</p>}
      </div>
      <div className={cx('product__bottom')}>
        <Button outline>
          <CartIcon></CartIcon> Add To Cart
        </Button>
      </div>
    </div>
  )
}
export default ProductItem
