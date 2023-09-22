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
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import CardIntroduce from '../../components/CardIntroduce/CardIntroduce'

const cx = classNames.bind(styles)
const NAV_LIST = [
  {
    id: 1,
    active: true,
    name: 'MSI GS Series'
  },
  {
    id: 2,
    active: false,
    name: 'MSI GS Series'
  },
  {
    id: 3,
    active: false,
    name: 'MSI GS Series'
  },
  {
    id: 4,
    active: false,
    name: 'MSI GS Series'
  }
]
const PRODUCT_LIST = [
  {
    id: 1,
    img: '/images/Laptop.png',
    price: 900,
    salePrice: 400,
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    isCheck: true
  },
  {
    id: 2,
    img: '/images/Laptop.png',
    price: 900,
    salePrice: 400,
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    isCheck: true
  },
  {
    id: 3,
    img: '/images/Laptop.png',
    price: 900,
    salePrice: 400,
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    isCheck: true
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
      </section>

      <section>
        <ProductList navs={NAV_LIST} products={PRODUCT_LIST}></ProductList>
      </section>
      <section>
        <ProductList navs={NAV_LIST} products={PRODUCT_LIST}></ProductList>
      </section>
      <section className={cx('brand')}>
        <BrandLogo logo={'/images/logoRoccat.png'} />
        <BrandLogo logo={'/images/logoMsi.png'} />
        <BrandLogo logo={'/images/logoRazer.png'} />
        <BrandLogo logo={'/images/logoThermaltake.png'} />
        <BrandLogo logo={'/images/lgoAdata.png'} />
        <BrandLogo logo={'/images/logoGigabyte.png'} />
        <BrandLogo logo={'/images/logoHp.png'} />
      </section>
      <section className={cx('introduce')}>
        <h4 className={cx('introduce__title')}>Follow us on Instagram for News, Offers & More</h4>
        <Row>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
          <Col span={6}>
            <CardIntroduce
              img={'/images/introduce.png'}
              desc={
                'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...'
              }
              date={'09/09/0909'}
            ></CardIntroduce>
          </Col>
        </Row>
      </section>
    </div>
  )
}
export default Home
