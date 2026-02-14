
import Images from '../../constants/images.constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/core'
import { GoRocket } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";

const Home = () => {
  
  return (
    <main className=''>
      <section className='py-[9vh] px-[5vw] md:px-[6vw] min-h-[80vh]'>
        <div className="md:w-[45%] md:float-right bg-" style={{backgroundImage:`url(${Images.HeroFillers})`,backgroundPosition:'center',backgroundSize:'cover'}}>
          <img src={Images.HeroPhone} className='w-full h-[65vh] object-contain rounded-3xl' alt="" />
        </div>

        <div className="text-left md:w-[45%] my-8">
          <h2 className='text-5xl font-extrabold my-16 text-justify'>A smarter way for students to  <span className='text-5xl font-extrabold text-primary'>save</span> and spend productively.</h2>
          <p className='my-16 text-justify'>Empower your academic journey with Student — the all-in-one app designed to help you manage, save, and spend money more productively. Access exclusive partner discounts, track your finances, and take control of your spending like never before. Smart money. Smart student life.</p>
          <div className="flex my-16 flex-wrap justify-center md:justify-start  items-center gap-10 mt-[6vh]">
                <img data-aos="zoom-in-up" src={Images.GooglePlay} alt="" />
                <img data-aos="zoom-in-up" data-a src={Images.IosStore} alt="" />
          </div>
        </div>

      </section>

      <section className='py-[9vh] px-[5vw] md:px-[6vw] bg-[#FFE8D9]'>
        <h2 className='text-2xl mb-[5vh] font-bold text-center'>Our Trusted Partners</h2>
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 9500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  720: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  772: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  930: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1144: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1344: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                  1544: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.uber} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.Visa} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.Melcom} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.Yango} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.Bolt} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                 <img className='h-20 mx-auto' src={Images.Shoprite} alt="" />
                </SwiperSlide>
               
                
              </Swiper>
      </section>

      <section className='py-[9vh] px-[5vw] md:px-[6vw]'>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="w-full lg:w-[44%]">
            <p className='text-primary my-[3vh]'>A financial haven for students </p>
            <h1 className='text-4xl my-[3vh] font-bold'>Why use Student?</h1>
            <div className="flex flex-wrap gap-7 my-8">
                <div className="md:w-[45%]">
                  <GoRocket className='fill-primary' size={40}/>
                  <h2 className='text-[19px] my-5 font-bold'>Convenience</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="md:w-[45%]">
                  <MdOutlineDiscount className='fill-primary' size={40}/>
                  <h2 className='text-[19px] my-5 font-bold'>Discounts from partners</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>
          </div>
          <div className="w-full my-12 lg:w-[48%] px-5">
            <img src={Images.Home_whyUseStudent} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>
        </div>
      </section>


      <section className='py-[9vh] px-[5vw] md:px-[6vw] bg-[#3C312B1A]'>
        <div className="flex items-center justify-between flex-wrap gap-5">
          
          <div className="w-full my-12 lg:w-[48%] px-5">
            <img src={Images.Home_financeTailoredNeeds} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>

          <div className="w-full lg:w-[44%]">
            <p className='text-primary my-[3vh]'>Everything Finance. Tailored to student’s needs. </p>
            <h1 className='text-2xl my-[3vh] font-bold'>Money Transfer</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>

            <h1 className='text-2xl my-[3vh] font-bold'>Money Management</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>

            <h1 className='text-2xl my-[3vh] font-bold'>Payment and Purchases</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>
          </div>
        </div>
      </section>


      <section className='py-[9vh] px-[5vw] md:px-[6vw] min-h-screen items-center justify-center flex flex-col'>
          <p className='text-primary my-[5vh]'>Our Key Features</p>
          <h1 className='my-[5vh] font-extrabold text-[48px]'>What Student does for you.</h1>
          <p className='my-[5vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>
          <div className="flex flex-wrap justify-between gap-10 my-8">
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.saveMoney} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Save money</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.SendReceiveMoney} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Save money</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.payFeesAndbills} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Save money</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.PurchaseAtLowerPrices} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Save money</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
          </div>
      </section>

      <section className='py-[9vh] px-[5vw] md:px-[6vw] bg-[#3C312B1A] overflow-hidden'>
          <div className="flex relative ">
            <div className="mx-auto xl:mr-0 xl:ml-auto xl:w-[48%] p-4">
                <h1 className='text-3xl my-[6vh]'>Download the Student app now</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>
                <div className="flex my-16 flex-wrap justify-center md:justify-start  items-center gap-10 mt-[6vh]">
                    <img data-aos="zoom-in-up" src={Images.GooglePlay} alt="" />
                    <img data-aos="zoom-in-up" data-a src={Images.IosStore} alt="" />
                </div>
            </div>
            <img src={Images.DownloadAppPhone} className='hidden h-[117%] animate-in xl:block xl:absolute xl:left-[-3rem]' alt="" />
          </div>
      </section>


      <section className='py-[19vh]'>
          <div className="my-[15vh] flex flex-wrap gap-10 bg-[#3C312B] min-h-[70vh]">
              <div className="min-h-[50vh] w-full md:w-[30%] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${Images.Home_personPhone})`}}></div>
              <div className="md:w-[65%] px-6 md:px-2 py-10">
                <p className='text-primary my-[5vh]'>Everything finance you’ll ever need as a student</p>
                <h1 className='text-white text-4xl'>Your hub for everything money.</h1>

                <div className="flex flex-wrap gap-7 my-8">
                    <div className="md:w-[30%] my-[5vh]">
                      <GoRocket className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Convenience</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                    <div className="md:w-[30%] my-[5vh]">
                      <MdOutlineDiscount className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Discounts from partners</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                    <div className="md:w-[30%] my-[5vh]">
                      <MdOutlineDiscount className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Discounts from partners</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                    <div className="md:w-[30%] my-[5vh]">
                      <GoRocket className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Convenience</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                    <div className="md:w-[30%] my-[5vh]">
                      <MdOutlineDiscount className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Discounts from partners</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                    <div className="md:w-[30%] my-[5vh]">
                      <MdOutlineDiscount className='fill-primary' size={40}/>
                      <h2 className='text-white text-[19px] my-5 font-bold'>Discounts from partners</h2>
                      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                    </div>
                </div>
              </div>
          </div>
      </section>
    </main>
  )
}

export default Home