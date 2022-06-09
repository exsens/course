import React, {FC} from 'react';
import c from './banners.module.scss';

interface BannerPropsType {
  banner: string
}

const Banner: FC<BannerPropsType> = ({banner}) => {
  return (
    <div className={c.banner}>
      <img src={banner} alt="banner" />
    </div>
  )
}

export default Banner;