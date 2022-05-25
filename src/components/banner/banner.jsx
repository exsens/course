import c from './banners.module.scss';

const Banner = ({banner}) => {
  return (
    <div className={c.banner}>
      <img src={banner} alt="banner" />
    </div>
  )
}

export default Banner;