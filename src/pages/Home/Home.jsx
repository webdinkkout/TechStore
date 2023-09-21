import classNames from 'classnames/bind'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import Col from '../../components/Col'
import ProductList from '../../components/ProductList'
import Row from '../../components/Row'
import SlideControl from '../../components/SlideControl'
import ProductItem from '../../components/product/ProductItem/ProductItem'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

const NAV_LIST = [
  { id: 1, name: 'taile', active: true },
  { id: 2, name: 'Nhatdung', active: false }
]
const PRODUCT_LIST = [
  {
    id: 1,
    name: "'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'",
    currentPrice: 499,
    price: 900,
    img: '/images/Laptop.png',
    isCheck: true
  },
  {
    id: 2,
    name: "'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'",
    currentPrice: 499,
    price: 900,
    img: '/images/Laptop.png',
    isCheck: false
  }
]
function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className={cx('home-page')}>
      <section className={cx('slide')}>
        <img src={'/images/slide.png'} alt='' />
      </section>
      <section className={cx('new-product')}>
        <div className={cx('new-product__head')}>
          <h4 className={cx('new-product__title')}>New Product</h4>
          <Link to={'#'}>See All New Product</Link>
        </div>
      </section>
      <section>
        <Carousel infinite={true} arrows={false} customButtonGroup={<SlideControl />} responsive={responsive}>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
          <div>
            <ProductItem
              name={'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'}
              currentPrice={499}
              price={900}
              img={'/images/Laptop.png'}
              isCheck
            ></ProductItem>
          </div>
        </Carousel>
      </section>

      <section className={cx('ad')}>
        <div className={cx('ad__items')}>
          <img src={'/images/logo1.png'} />
          <p className={cx('ad__item')}>own it now, up to 6 months interest free learn more</p>
        </div>
      </section>
      <section>
        <ProductList products={PRODUCT_LIST}></ProductList>
      </section>
      <section>
        <ProductList navs={NAV_LIST} products={PRODUCT_LIST}></ProductList>
      </section>
    </div>
  )
}
export default Home
