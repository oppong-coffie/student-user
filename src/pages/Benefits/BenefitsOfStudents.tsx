import Images from '@/constants/images.constants'
import { GoRocket } from 'react-icons/go'
import { MdOutlineDiscount } from 'react-icons/md'

const BenefitsOfStudents = () => {
  return (
   <main>
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
                  <h1 className="my-8 text-[20px] font-bold">Send and receive money</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.payFeesAndbills} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Pay Fees and Bills</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="text-center w-[20%] min-w-[15rem]">
                  <img className='h-[15vh] mx-auto my-8' src={Images.PurchaseAtLowerPrices} alt="" />
                  <h1 className="my-8 text-[20px] font-bold">Purchase at lower prices</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
          </div>
      </section>


      <section className='py-[9vh] px-[5vw] md:px-[6vw]'>
        <div className="flex items-center justify-between flex-wrap gap-5 bg-center bg-cover" style={{backgroundImage:`url(${Images.Benefit_Lines})`}}>
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
            <img src={Images.Benefit_makingStudentEasy} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>
        </div>
      </section>


       <section className='py-[19vh]'>
          <div className="my-[15vh] flex flex-wrap gap-10 bg-[#3C312B] min-h-[70vh]">
              <div className="min-h-[50vh] w-full md:w-[30%] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${Images.Benefit_keepYouFocused})`}}></div>
              <div className="md:w-[65%] px-6 md:px-2 py-10">
                <p className='text-primary my-[5vh]'>Everything finance you’ll ever need as a student</p>
                <h1 className='text-white text-4xl'>Keeping you covered as you focus on your books </h1>

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


            <section className='py-[9vh] my-[12vh] px-[5vw] md:px-[6vw] bg-[#3C312B1A] overflow-hidden'>
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

export default BenefitsOfStudents