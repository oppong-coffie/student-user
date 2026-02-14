import Images from '@/constants/images.constants';

const AboutStudent = () => {
  const partners =[
        {
            name:'Kane Mani',
            title:' Co-Founder & CEO',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
        {
            name:'Fred Clinton Ahagnobe',
            title:'Head, Engineering',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
        {
            name:'Michael Tamakloe',
            title:'Mobile Engineer',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
        {
            name:'Bernard Appiedu',
            title:'Voice Engineer',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
        {
            name:'Michael Mensah',
            title:'Service Centre Officer',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
        {
            name:'Emmanuel Sarfo-Kantanka',
            title:'Account Officer',
            profile:Images.profile,
            role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
            // subroles :[
            //     "Co-founded Origgin in 2010",
            //     `Patron of "A Day In Tech"`,
            //     "Co-founder & CEO at Gudu Studios"
            // ]
        },
    ]

  return (
   <main>
     <section className='pt-[9vh] flex flex-wrap min-h-[85vh]'>
         <div className="md:w-[45%] h-[80vh] w-full bg-no-repeat bg-left" style={{backgroundImage:`url(${Images.About_Hero})`,backgroundSize:'contain'}}>
          {/* <img src={Images.HeroPhone} className='w-full h-[65vh] object-contain rounded-3xl' alt="" /> */}
        </div>  

        <div className="text-left w-full md:w-[45%] mx-auto my-8">
          <h2 className='text-5xl font-extrabold my-16'>A smart way for students to <span className='text-5xl font-extrabold text-primary'>manage</span>, send and receive money.</h2>
          <p className='my-16'>Empower your student life with Student app! Seamlessly manage, send, and receive money while unlocking exclusive partner discounts for a smarter way to budget and spend. Your all-in-one solution for financial ease during your academic journey!</p>
          <div className="flex my-16 flex-wrap justify-center md:justify-start  items-center gap-10 mt-[6vh]">
                <img data-aos="zoom-in-up" src={Images.GooglePlay} alt="" />
                <img data-aos="zoom-in-up" data-a src={Images.IosStore} alt="" />
        </div>
        </div>

      </section>

      <section className='pb-[9vh] flex px-[5vw] md:px-[6vw] min-h-[80vh] bg-[#EBEAEA]'>
        <div className="flex items-center justify-between flex-wrap gap-5">

          <div className="w-full lg:w-[44%]">
            {/* <h1 className='text-2xl my-[3vh] font-bold'>Our Vision</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. </p> */}

            <h1 className='text-2xl my-[3vh] font-bold'>Our Mission</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. </p>

            {/* <h1 className='text-2xl my-[3vh] font-bold'>Our Goal</h1>
            <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis convallis, maximus nisl vel, auctor velit. </p> */}
          </div>

          <div className="w-full my-12 lg:w-[48%] px-5">
            <img src={Images.About_CompanyValue} className='h-[85vh] object-contain mx-auto' alt="" />
          </div>
        </div>
      </section>

      <section className='min-h-screen py-[9vh] px-[4vw] relative'>
            <div className="">
                <div className=" my-[9vh] w-[90] md:w-[70%] mx-auto text-center">
                    <h1 className='text-4xl mb-6'>Meet Our Team</h1>
                    <p>Our team is composed of passionate and skilled professionals dedicated to delivering on our mission.</p>
                </div>

                <div className="patners flex flex-wrap justify-center gap-5 items-center  md:w-[70%] w-[90%] mx-auto">
                    {
                        partners.map((item,id)=>(
                            <div key={id} className="w-[30rem] md:w-[40%] max-w-[18rem] mx-[0.2rem] min-h-[60vh]" data-aos="fade-up">
                                <div className="profile rounded-3xl h-[30vh]" style={{backgroundImage:`url(${item.profile})`,backgroundPositionX:'50%',backgroundPositionY:'10%',backgroundSize:'120%'}}></div>
                                <h2 className='text-2xl my-1 text-center'>{item.name}</h2>
                                <h2 className='text my-2 text-center text-muted-foreground'>{item.title}</h2>
                                <p className='text-[1rem] text-muted-foreground'>{item.role}</p>
                            </div>
                        ))
                    }
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
    </main>
  )
}

export default AboutStudent