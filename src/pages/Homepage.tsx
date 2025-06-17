import Slider from '../components/homepage/Slider'
import { categories } from '../types/categor'
import Category from '../components/homepage/category'
import Review from '../components/reviews/Review'
import ReviewBanner from '../components/banners/banner'
import AdCard from '../components/common/Adcart'
import CommunityBanner from '../components/banners/CommunityBanner'
import TopReviews from '../components/TopReviews'


export type bannerTpe = {
  bg: string,
  img: string[],
  title: string,
  desc: string
}


const Homepage = () => {
  return (
    <div className='bg-[#f6f5f5] overflow-x-hidden'>
      <div className="flex items-center justify-center">
        <div className='w-[93vw] mt-5'>
          <Slider />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between my-10 mx-5">
        {
          categories.map((c, index) => {
            return (
              <Category c={c} key={index} />
            )
          })
        }
      </div>
      <div className='px-1 md:px-0'>
        <ReviewBanner />
      </div>
      <div className="grid md:px-8 px-3 md:grid-cols-4 grid-cols-2 my-7 items-center justify-center md:gap-4 gap-2 flex-wrap">
        <AdCard
          image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwfGVufDB8fDB8fHww"
          url="https://www.amazon.in/example-product"
          platform="Amazon"
        />
        <Review />
        <Review />
        <AdCard
          image="https://plus.unsplash.com/premium_photo-1723826753083-2309f7203ab1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
          url="https://www.amazon.in/example-product"
          platform="Flipkart"
        />
      </div>
      <div className="flex md:px-[3%] px-2 flex-col md:mt-20 gap-3">
        <h1 className='md:text-3xl text-2xl font-semibold tracking-tight text-purple-600 mb-2'>Trending Products 📈</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 pb-7">
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
      <div>
        <TopReviews />
      </div>
      <div className="flex md:px-[3%] px-2 flex-col md:mt-20 gap-3">
        <h1 className='md:text-3xl text-2xl font-semibold tracking-tight text-purple-600 md:mb-1 mt-2'>Trending Categories 👇</h1>
        <div className="flex items-center flex-wrap justify-between">
          {
            categories.map((c, index) => {
              return (
                <Category c={c} key={index} />
              )
            })
          }
        </div>
      </div>
      <div className="mt-10">
      <CommunityBanner />
      </div>
    </div>
  )
}

export default Homepage
