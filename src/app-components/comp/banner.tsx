import './banner.css'

import Image from 'next/image'

const Banner = () => {
  return (
    <div className="banner">
      <Image className='banner-image' src="/banner.jpg" width={1173} height={360} alt='banner' />
      
    </div>
  )
}
export default Banner