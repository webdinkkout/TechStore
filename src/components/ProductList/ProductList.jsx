import classNames from 'classnames/bind'
import ProductItem from '../../components/product/ProductItem'
import styles from './ProductList.module.scss'
import Row from '../Row'
import Col from '../Col'

const cx = classNames.bind(styles)

function ProductList({ navs = [] }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('nav')}>
        {navs.map((nav) => {
          return <button className={cx('nav__item', 'active')}>MSI GS Series</button>
        })}
      </div>
      <div className={cx('wrapper__product')}>
        <Row>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
          <Col span={6}>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductList
