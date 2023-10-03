import {
  BsDownload,
  BsFillBriefcaseFill,
  BsPhone,
  BsPlus,
  BsArrowUpRightCircle,
  BsFillChatLeftDotsFill,
  BsCompass,
} from "react-icons/bs";
import {
  FaSkype,
  FaEnvelope,
  FaWhatsapp,
  FaMap,
  FaFilePdf,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import { BsHouseDoor, BsPerson, BsBriefcase, BsColumns, BsTelephone } from 'react-icons/bs'

import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import { HiMenu } from "react-icons/hi";
import Testimonials from "@/components/Testimonials";
import TypedWord from "@/components/TypedWord";
import Menu from "@/components/Menu";

import Link from "next/link"
import NavBar from "@/components/NavBar";

import paulEdited from '../../public/paulEdited.png'
import jjwelding from '../../public/jjwelding.png'
import architect from '../../public/architect.png'
import paulport from '../../public/architect.png'

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Menu />
      <aside className='w-[100px] lg:block lg:fixed inset-y-0 bg-fuchsia-100 hidden'>
        <div className='w-full inline-flex py-2 px-2 justify-center content-center border-b border-fuchsia-300'>
          <a href="" className="w-[90%]">
            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/logo.svg" alt="paul logo" />
          </a>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 antialiased mt-6 text-sm font-medium transition duration-300'>
          <Link href='/#home' className='flex flex-col items-center gap-2'>
            <BsHouseDoor size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
            <p>Home</p>
          </Link>
          <Link href='/#about' className='flex flex-col items-center gap-2'>
            <BsPerson size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
            <p>About</p>
          </Link>
          <Link href='/#services' className='flex flex-col items-center gap-2'>
            <BsBriefcase size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
            <p>Services</p>
          </Link>
          <Link href='/#portfolio' className='flex flex-col items-center gap-2'>
            <BsColumns size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
            <p>Portfolio</p>
          </Link>
          {/* <Link href='/#testimonials' className='flex flex-col items-center gap-2'>
                <MdOutlineReviews size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                <p>ratings</p>
            </Link> */}
          <Link href='/#contact' className='flex flex-col items-center gap-2'>
            <BsTelephone size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
            <p>Contact</p>
          </Link>
        </div>
        {/* <button className='absolute w-full bottom-0 flex justify-center'>
        <BsCircleHalf size={16} className='pt-2  px-4 box-content bg-fuchsia-300 rounded-t-lg'/>
    </button> */}
      </aside>
      <main className="lg:pl-[100px]">
        <NavBar />
        <section id="home" className="bg-fuchsia-100/20">
          <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-x-16 gap-y-16">
            <Image
              src={paulEdited}
              className="aspect-square w-96 h-96 rounded-3xl object-cover object-center"
              alt="main Image"
            />
            <div className="md:text-left text-center">
              <h5 className="text-xl mb-4 text-neutral-800 font-medium">
                👋 Hi, I`m
              </h5>
              <h1 className="mb:text-6xl text-4xl mb-4 font-bold text-neutral-800 antialiased">
                Paul{" "}
                <Image
                  className="inline w-16 h-16 object-cover object-center rounded-full"
                  src={paulEdited}
                  alt="pauls profile"
                />{" "}
                Mbatia
              </h1>
              <h2 className="text-2xl text-neutral-800 font-medium mb-6">
                <TypedWord />
              </h2>
              <p className="text-lg text-neutral-600 font-normal mb-8">
              I specialize in harnessing the capabilities of React.js and Next.js to build dynamic, responsive, and high-performance web applications
              </p>
              <button className="primary-btn">
                Download cv <BsDownload className="inline" />
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="bg-fuchsia-100">
          <div className="container flex lg:flex-row flex-col justify-center gap-16">
            <div className="lg:basis-5/12 basis-full px-3">
              <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-6">
                about me
              </h3>
              <div className="pb-14 pr-6">
                <h4 className="uppercase text-base font-semibold text-neutral-900 mb-2">
                  my name is paul mbatia
                </h4>
                <h2 className="uppercase text-3xl font-semibold text-neutral-800 mb-7">
                  I AM AVAILABLE FOR UI UX DESIGN PROJECTS
                </h2>
                <p className="text-xl text-neutral-700 ">
                  I am a skilled frontend developer based in Kenya with a rich background in React.js and Next.js. With two years of hands-on experience, I have honed my expertise in crafting engaging and responsive user interfaces. My proficiency extends to leveraging the power of React.js to build dynamic and scalable web applications, while Next.js enables me to develop seamless and performant projects. I bring a keen eye for design and a commitment to creating user-friendly experiences. I am passionate about staying current with the latest industry trends and technologies, ensuring that I deliver cutting-edge solutions. As a developer, I thrive on collaborative projects and am dedicated to continuously enhancing my skills to contribute effectively to the ever-evolving field of frontend development.
                </p>
              </div>
            </div>
            <div className="lg:basis-7/12 basis-full sticky top-0">
              <div className="flex gap-6 pt-6 mb-12 sm:flex-row flex-col">
                <Image
                  src={paulEdited}
                  className="sm:basis-7/12 basis-full h-80 min-w-0 rounded-2xl object-cover"
                  alt="paul Image"
                />
                <div className="sm:basis-5/12 basis-full flex flex-col gap-4 w-full">
                  
                  <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                      <FaEnvelope size={20} />
                    </div>
                    <span className="font-medium text-neutral-700">
                      Mail me
                    </span>
                  </div>
                  <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                      <FaWhatsapp size={20} />
                    </div>
                    <span className="font-medium text-neutral-700">
                      WhatsApp me
                    </span>
                  </div>
                  <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                      <FaFilePdf size={20} />
                    </div>
                    <span className="font-medium text-neutral-700">Resume</span>
                  </div>
                  
                </div>
              </div>
              <div>
                <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-8 ">
                  skills
                </h3>
                <div>
                  <h4 className="relative mb-8 font-medium before:absolute before:w-14 before:h-[3px] before:-bottom-2 before:bg-fuchsia-300">
                    Languages
                  </h4>
                  <div className="flex flex-col gap-8 mb-12">
                    <div>
                      <h5 className="mb-2 font-medium">HTML5</h5>
                      <div
                        className="w-full h-[5px] bg-fuchsia-200"
                        role="progressbar"
                      >
                        <div
                          className="h-full bg-fuchsia-900 relative"
                          style={{ width: "95%" }}
                        >
                          <span className="absolute -top-7 right-0 text-sm">
                            95%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2 font-medium">CSS3</h5>
                      <div
                        className="w-full h-[5px] bg-fuchsia-200"
                        role="progressbar"
                      >
                        <div
                          className="h-full bg-fuchsia-900 relative"
                          style={{ width: "90%" }}
                        >
                          <span className="absolute -top-7 right-0 text-sm">
                            90%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2 font-medium">SASS</h5>
                      <div
                        className="w-full h-[5px] bg-fuchsia-200"
                        role="progressbar"
                      >
                        <div
                          className="h-full bg-fuchsia-900 relative"
                          style={{ width: "75%" }}
                        >
                          <span className="absolute -top-7 right-0 text-sm">
                            75%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2 font-medium">Javascript</h5>
                      <div
                        className="w-full h-[5px] bg-fuchsia-200"
                        role="progressbar"
                      >
                        <div
                          className="h-full bg-fuchsia-900 relative"
                          style={{ width: "86%" }}
                        >
                          <span className="absolute -top-7 right-0 text-sm">
                            86%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2 font-medium">Typescript</h5>
                      <div
                        className="w-full h-[5px] bg-fuchsia-200"
                        role="progressbar"
                      >
                        <div
                          className="h-full bg-fuchsia-900 relative"
                          style={{ width: "70%" }}
                        >
                          <span className="absolute -top-7 right-0 text-sm">
                            70%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="relative mb-8 font-medium before:absolute before:w-14 before:h-[3px] before:-bottom-2 before:bg-fuchsia-300">
                    Frameworks I use
                  </h4>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                      <FaReact size={32} className="" />
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                      <TbBrandNextjs size={32} />
                      <span>NextJs</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                      <FaWordpress size={32} />
                      <span>WordPress</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                      <SiTailwindcss size={32} />
                      <span>Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-fuchsia-100/20">
          <div className="container">
            <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">
              my services
            </h1>
            <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  Mobile-First Development
                </h2>
                <p className="text-neutral-800  text-base">
                  Design and develop with a mobile-first approach to ensure a smooth experience on smartphones and tablets.
                </p>
              </div>
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  HTML5/CSS3 Development
                </h2>
                <p className="text-neutral-800  text-base">
                  Write clean, semantic HTML and CSS code to structure and style web content.
                </p>
              </div>
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  User Interface (UI) Design
                </h2>
                <p className="text-neutral-800  text-base">
                  Create visually appealing and intuitive interfaces for websites and applications.
                </p>
              </div>
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  JavaScript Development
                </h2>
                <p className="text-neutral-800  text-base">
                  Implement interactive and dynamic elements using JavaScript, and popular frameworks/libraries like React.
                </p>
              </div>
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  Web Animation
                </h2>
                <p className="text-neutral-800  text-base">
                  Integrate animations and transitions to enhance user engagement and make the interface more dynamic.
                </p>
              </div>
              <div className="service-card group">
                <div className="relative w-fit">
                  <BsPhone
                    size={32}
                    className="box-content relative z-30 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"
                  />
                  <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-20 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                </div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">
                  Performance Optimization
                </h2>
                <p className="text-neutral-800  text-base">
                  Optimize frontend code and assets to improve website/application loading times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="bg-fuchsia-100">
          <div className="container">
            <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">
              my projects
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 transition-all duration-300 gap-6">
              <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                  <BsPlus size={24} />
                </div>
                <Image
                  src={jjwelding}
                  alt="portfolioOne"
                  className="w-full h-72 rounded-xl object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                  <div>
                    <h5 className=" font-medium mb-1">Welder Website design</h5>
                    <p className="text-sm text-neutral-800">
                      Nextjs, Wordpress
                    </p>
                  </div>
                  <a href="https://james-portfolio-buaeabimc-dimswati.vercel.app/" target="_blank"
                    className="p-1.5 bg-fuchsia-300 h-fit rounded-full"
                  >
                    <BsArrowUpRightCircle />
                  </a>
                </div>
              </div>
              <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                  <BsPlus size={24} />
                </div>
                <Image
                  src={architect}
                  alt="portfolioOne"
                  className="h-72 rounded-xl w-full object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                  <div>
                    <h5 className=" font-medium mb-1">Architect Design</h5>
                    <p className="text-sm text-neutral-800">
                      Wordpress, ReactJs
                    </p>
                  </div>
                  <a href="https://architect-qda1o1n1x-dimswati.vercel.app/" target="_blank"
                    className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                  "
                  >
                    <BsArrowUpRightCircle />
                  </a>
                </div>
              </div>
              <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                  <BsPlus size={24} />
                </div>
                <Image
                  src={paulEdited}
                  alt="portfolioOne"
                  className="w-full h-72 rounded-xl object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                  <div>
                    <h5 className=" font-medium mb-1">Personal Portfolio</h5>
                    <p className="text-sm text-neutral-800">
                      NextJs, Tailwind CSS
                    </p>
                  </div>
                  <div
                    className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                  "
                  >
                    <BsArrowUpRightCircle />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        <section id="contact" className="bg-fuchsia-100">
          <div className="container">
            <div className="flex lg:flex-row flex-col gap-12">
              <div className="lg:basis-5/12 basis-full">
                <h2 className="text-2xl font-medium mb-7">
                  Let`s Discuss Your Project
                </h2>
                <div className="flex flex-col gap-10 mb-8">
                  <div className="flex gap-5">
                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                      <BsFillChatLeftDotsFill size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Email me</h4>
                      <p className="text-base text-neutral-800">
                        I will look forward to read your email
                      </p>
                      <span className="text-base text-neutral-700 font-semibold cursor-pointer">
                        paulmacharia@proton.me
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                      <BsCompass size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Location</h4>
                      <p className="text-base text-neutral-800">
                        Eldoret, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                      <BsPhone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Let`s Talk</h4>
                      <p className="text-base text-neutral-800">
                        Mon-Fri from 8am to 5pm.
                      </p>
                      <span className="text-base text-neutral-700 font-semibold cursor-pointer">
                        +254 111 338 700
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-48 border-2 border-fuchsia-200 p-2 rounded-lg bg-white">
                  <iframe
                    className="h-full w-full border-2"
                    src="https://www.google.com/maps/embed/v1/place?q=Eldoret,+Kenya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
              </div>
              <form className="lg:basis-7/12 basis-full bg-white rounded-xl p-9 border-2 border-fuchsia-200">
                <h3 className="text-3xl font-medium mb-3">
                  Got Ideas? I've got the skills. Let's team up.
                </h3>
                <p className="text-lg mb-6">
                  Tell me more about yourself and what you're got in mind.
                </p>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex gap-4 sm:flex-row flex-col">
                    <div className="flex flex-1 flex-col gap-2">
                      <label htmlFor="firstName" className="text-sm">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label htmlFor="yourEmail" className="text-sm">
                        Your Email
                      </label>
                      <input
                        type="text"
                        id="yourEmail"
                        className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600 "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm">
                      Your Message
                    </label>
                    <textarea
                      className="resize-none w-full h-32 border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600"
                      name="message"
                      rows={10}
                      cols={10}
                      id="message"
                    ></textarea>
                  </div>
                  <button className="primary-btn w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
