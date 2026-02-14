import Images from '@/constants/images.constants'
import { GoRocket } from 'react-icons/go'
import { MdOutlineDiscount } from 'react-icons/md'

const Features = () => {
  return (
    <main className=''>
      <section className='py-[9vh] px-[5vw] md:px-[6vw] min-h-[80vh] overflow-x-hidden'>
        <div className="md:w-[47%] md:float-right bg-" style={{backgroundImage:`url(${Images.Feature_Fillers})`,backgroundPosition:'center',backgroundSize:'cover'}}>
          <img src={Images.Feature_HeroPhone} className='relative left-[8rem] w-full h-[65vh] object-contain rounded-3xl' alt="" />
        </div>

        <div className="text-left md:w-[43%] my-8">
          <h2 className='text-5xl font-extrabold my-16'>A smart way for students to <span className='text-5xl font-extrabold text-primary'>manage</span>, send and receive money.</h2>
          <p className='my-16'>Empower your student life with Student app! Seamlessly manage, send, and receive money while unlocking exclusive partner discounts for a smarter way to budget and spend. Your all-in-one solution for financial ease during your academic journey!</p>
          <div className="flex my-16 flex-wrap justify-center md:justify-start  items-center gap-10 mt-[6vh]">
                <img data-aos="zoom-in-up" src={Images.GooglePlay} alt="" />
                <img data-aos="zoom-in-up" data-a src={Images.IosStore} alt="" />
          </div>
        </div>

      </section>


      <section className='py-[9vh] my-[10vh] bg-primary px-[5vw] md:px-[6vw] min-h-[80vh]'>
       <div className="flex items-center justify-between flex-wrap gap-5 bg-center bg-cover" style={{backgroundImage:`url(${Images.Benefit_Lines})`}}>
          <div className="w-full my-12 lg:w-[48%] px-5">
            <img src={Images.Feature_TwinPhone} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>
          <div className="w-full lg:w-[44%]">
            <p className='text-primary my-[3vh]'>A financial haven for students </p>
            <h1 className='text-4xl my-[3vh] font-bold'>Why use Student?</h1>
            <div className="flex flex-wrap gap-7 my-8">
                <div className="md:w-[45%]">
                  <GoRocket className='fill-white' size={40}/>
                  <h2 className='text-[19px] my-5 font-bold'>Convenience</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
                <div className="md:w-[45%]">
                  <MdOutlineDiscount className='fill-white' size={40}/>
                  <h2 className='text-[19px] my-5 font-bold'>Discounts from partners</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. </p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit sagittis lacus id gravida. In nec vehicula dui. </p>
          </div>
          
        </div>

      </section>

       <section className='pt-[9vh] flex items-center flex-wrap min-h-[85vh]'>

        <div className="text-left w-full md:w-[43%] mx-auto my-8">
          <h2 className='text-5xl font-extrabold my-16'>Lorem Ipsum</h2>
          <p className='my-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia.</p>
        </div>

        <div className="md:w-[47%] h-[80vh] w-full bg-no-repeat bg-center" style={{backgroundImage:`url(${Images.Feature_StackedPhone})`,backgroundSize:'contain'}}>
        </div>  

      </section>


<section className='py-[9vh] bg-primary/10 px-[5vw] md:px-[6vw] min-h-[80vh]'>
       <div className="flex items-center justify-between flex-wrap gap-5 bg-center bg-cover" style={{backgroundImage:`url(${Images.Benefit_Lines})`}}>
          <div className="w-full my-12 lg:w-[48%] px-5">
            <img src={Images.LowerPhone} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>
          <div className="w-full lg:w-[44%]">
            <h1 className='text-4xl my-[3vh] font-bold'>Lorem Ipsum</h1>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia.</p>
          </div>
          
        </div>

      </section>


      <section className='pt-[9vh] flex items-center flex-wrap min-h-[85vh] bg-[#FFB380]'>

        <div className="text-left w-full md:w-[43%] mx-auto my-8">
          <h2 className='text-5xl font-extrabold my-16'>Lorem Ipsum</h2>
          <p className='my-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at felis. Duis maximus nibh quis neque tempus lacinia.</p>
        </div>

        <div className="md:w-[47%] h-[80vh] w-full bg-no-repeat bg-left" style={{backgroundImage:`url(${Images.Feature_SplitPhone})`,backgroundSize:'cover'}}>
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


             <section className='py-[19vh]'>
          <div className="my-[15vh] flex flex-wrap gap-10 bg-[#3C312B] min-h-[70vh]">
              <div className="min-h-[50vh] w-full md:w-[30%] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${Images.Feature_KeepingFinancialOperations})`}}></div>
              <div className="md:w-[65%] px-6 md:px-2 py-10">
                <p className='text-primary my-[5vh]'>Everything finance you’ll ever need as a student</p>
                <h1 className='text-white text-4xl'>Keeping your financial operations covered.</h1>

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
  </main>    
  )
}

export default Features