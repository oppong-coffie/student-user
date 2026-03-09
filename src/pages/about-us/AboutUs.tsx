import Images from '@/constants/images.constants';

const AboutStudent = () => {
  const partners = [
    {
      name: 'Kane Mani',
      title: ' Co-Founder & CEO',
      profile: Images.profile,
      role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      // subroles :[
      //     "Co-founded Origgin in 2010",
      //     `Patron of "A Day In Tech"`,
      //     "Co-founder & CEO at Gudu Studios"
      // ]
    },
    {
      name: 'Oppong Coffie',
      title: 'Head, Software  Engineering',
      profile: Images.me,
      role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      // subroles :[
      //     "Co-founded Origgin in 2010",
      //     `Patron of "A Day In Tech"`,
      //     "Co-founder & CEO at Gudu Studios"
      // ]
    },
    // {
    //     name:'Michael Tamakloe',
    //     title:'Mobile Engineer',
    //     profile:Images.profile,
    //     role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
    //     // subroles :[
    //     //     "Co-founded Origgin in 2010",
    //     //     `Patron of "A Day In Tech"`,
    //     //     "Co-founder & CEO at Gudu Studios"
    //     // ]
    // },
    // {
    //     name:'Bernard Appiedu',
    //     title:'Voice Engineer',
    //     profile:Images.profile,
    //     role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
    //     subroles :[
    //         "Co-founded Origgin in 2010",
    //         `Patron of "A Day In Tech"`,
    //         "Co-founder & CEO at Gudu Studios"
    //     ]
    // },
    // {
    //     name:'Michael Mensah',
    //     title:'Service Centre Officer',
    //     profile:Images.profile,
    //     role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
    //     subroles :[
    //         "Co-founded Origgin in 2010",
    //         `Patron of "A Day In Tech"`,
    //         "Co-founder & CEO at Gudu Studios"
    //     ]
    // },
    // {
    //     name:'Emmanuel Sarfo-Kantanka',
    //     title:'Account Officer',
    //     profile:Images.profile,
    //     role: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
    //     subroles :[
    //         "Co-founded Origgin in 2010",
    //         `Patron of "A Day In Tech"`,
    //         "Co-founder & CEO at Gudu Studios"
    //     ]
    // },
  ]

  return (
    <main>
      <section className='pt-[9vh] flex flex-wrap min-h-[85vh]'>
        <div className="md:w-[45%] h-[80vh] w-full bg-no-repeat bg-left" style={{ backgroundImage: `url(${Images.About_Hero})`, backgroundSize: 'contain' }}>
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
      {/* Start of Team Section */}
      <section className='min-h-screen py-[9vh] px-[4vw] bg-[#FAFAFA] relative'>
        <div className="max-w-7xl mx-auto">
          <div className="my-[8vh] w-[90%] md:w-[60%] mx-auto text-center" data-aos="fade-up">
            <h1 className='text-4xl md:text-5xl font-extrabold mb-6 text-gray-900'>
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Our team is composed of passionate and skilled professionals dedicated to delivering on our mission.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10 items-stretch w-full mx-auto pb-10">
            {
              partners.map((item, id) => (
                <div key={id} className="group w-full sm:w-[45%] lg:w-[30%] max-w-[22rem] bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay={id * 100}>

                  {/* Image Container */}
                  <div className="relative w-full h-[320px] sm:h-[350px] bg-gradient-to-b from-gray-50 to-gray-200/50 overflow-hidden p-6 pb-0 flex items-end justify-center">
                    <img
                      src={item.profile}
                      alt={item.name}
                      className="w-full h-full object-contain object-bottom drop-shadow-xl group-hover:scale-105 origin-bottom transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col items-center text-center bg-white z-10 flex-grow">
                    <h2 className='text-2xl font-bold mb-2 text-gray-900'>{item.name}</h2>
                    <span className='inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-4'>
                      {item.title}
                    </span>
                    <p className='text-gray-600 text-[1rem] leading-relaxed'>{item.role}</p>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* End of Team Section */}


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