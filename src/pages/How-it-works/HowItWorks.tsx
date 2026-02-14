import Images from '@/constants/images.constants'
import 'swiper/core'

const HowItWorks = () => {
  return (
    <main>
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
      <section className='py-[9vh] px-[5vw] md:px-[6vw] min-h-screen items-center justify-center flex flex-col'>
        <h1 className='text-4xl font-bold my-7'>How It Works</h1>
        <p>Student is a smart financial app designed to help students manage, grow, and make the most of their money. Here’s how it works:</p>
        <ul className='w-[80%] md:w-[70%] mx-auto list-disc leading-8 my-7'>
          <li className='bg-[#ECECEC] p-4'>
            <div className="">
              <h1>Sign Up & Create Your Account</h1>
              <p>Download the Student app and sign up with your student ID or school credentials. Once verified, you’ll automatically receive:</p>
              <ul className='list-disc pl-4'>
                <li>A Student Bank Account to securely save and spend money.</li>
                <li>A Student Investment Account to start growing your funds.</li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className='w-[80%] md:w-[70%] mx-auto list-disc bg-[#ECECEC] leading-8 my-7'>
          <li className='bg-[#ECECEC] p-4'>
           <h1>Save Smarter</h1>
            <p>Use your Student Bank Account to deposit, receive, and manage money. Set savings goals, track your spending, and get real-time insights into your financial habits.</p>
          </li>
        </ul>

        <ul className='w-[80%] md:w-[70%] mx-auto list-disc bg-[#ECECEC] leading-8 my-7'>
          <li className='bg-[#ECECEC] p-4'>
           <h1>Grow Your Money</h1>
            <p>Your Investment Account gives you access to beginner-friendly investment options tailored for students. Whether it’s weekly savings or long-term goals, you can start small and watch your money grow over time.</p>
          </li>
        </ul>
        
        <ul className='w-[80%] md:w-[70%] mx-auto list-disc bg-[#ECECEC] leading-8 my-7'>
          <li className=' p-4'>
           <h1>Spend Productively</h1>
            <p>Every feature in the app is designed to help you spend with intention. From budgeting tools to personalized recommendations, Student helps you make wise financial decisions every day.</p>
          </li>
        </ul>
      </section>

      <section className='flex items-center justify-center min-h-[70vh]'>
        <img src={Images.LowerPhone} className='h-[60vh]' alt="" />
      </section>
    </main>
  )
}

export default HowItWorks