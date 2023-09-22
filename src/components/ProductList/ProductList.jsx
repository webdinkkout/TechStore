import classNames from 'classnames/bind'
import ProductItem from '../../components/product/ProductItem'
import styles from './ProductList.module.scss'
import Row from '../Row'
import Col from '../Col'

const cx = classNames.bind(styles)

function ProductList({ navs, products }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('nav')}>
        {navs &&
          navs.map((nav) => {
            return (
              <button
                key={nav.id}
                className={cx('nav__item', {
                  active: nav.active
                })}
              >
                {nav.name}
              </button>
            )
          })}
      </div>
      <div className={cx('wrapper__product')}>
        <Row>
          {products ? (
            products.map((item) => {
              return (
                <Col key={item.id} span={6}>
                  <ProductItem
                    name={item.name}
                    currentPrice={item.salePrice}
                    price={item.price}
                    img={item.img}
                    isCheck={item.isCheck}
                  ></ProductItem>
                </Col>
              )
            })
          ) : (
            <div>Mang Nay khong co san pham</div>
          )}
        </Row>
      </div>
    </div>
  )
}

export default ProductList
