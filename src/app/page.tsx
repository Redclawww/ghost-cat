"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container:any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff", // Dark background color
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#FFE9C9", "#DFEBFE", "#C9FFE9",], // Array of different colors
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2, // Slower speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50, // Fewer particles
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 10, max: 50 }, // Smaller size range
        },
      },
      detectRetina: true,
    }),
    []
  );

  const handleCopy = () => {
    navigator.clipboard
      .writeText("Hello, world!")
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        alert("Failed to copy text to clipboard.");
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center  font-Bodo font-bold ">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="-z-10 w-screen h-screen fixed top-0 left-0"
      />
      <header
        className="flex flex-row w-screen gap-10 py-10 px-16 items-center absolute justify-center lg:justify-around font-sans justify-between z-10"
        data-aos="fade-down"
      >
        <h1 className="text-2xl">TITLE</h1>
        <ul className="lg:flex gap-5 hidden text-2xl ">
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("tokenomics")}>Tokenomics</li>
          <li onClick={() => scrollToSection("partners")}>Partners</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
        <div className="md:flex hidden gap-10 justify-center items-center z-10">
          <a href="" className="md:flex hidden">
            <img src="/telegram.png" alt="Telegram" className="size-[40px]" />
          </a>
          <a href="" className="md:flex hidden">
            <img src="/twitter.png" alt="Twitter" className="size-[40px]" />
          </a>
        </div>
        <div className="lg:hidden">
          <Sheet className="">
            <SheetTrigger>
              <img src="menu.svg" alt="" className="size-[30px] text-white" />
            </SheetTrigger>
            <SheetContent className="bg-[#15141B]">
              <SheetHeader>
                <SheetTitle className="font-frog text-5xl text-white pb-5">
                  TITLE
                </SheetTitle>
                <SheetDescription className="text-white text-3xl flex flex-col gap-5 font-cat">
                  <div onClick={() => scrollToSection("about")}>About</div>
                  <div onClick={() => scrollToSection("tokenomics")}>
                    Tokenomics
                  </div>
                  <div onClick={() => scrollToSection("partners")}>
                    Partners
                  </div>
                  <div onClick={() => scrollToSection("contact")}>Contact</div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <section  className="flex flex-col items-center justify-center py-28 md:h-[90vh] text-center gap-16  w-screen">
        <h1 className="text-7xl" data-aos="fade-up"><span className='text-[#F0991B]'>WELCOME TO</span> <span className='text-[#CCCC1A] bg-[#F1FDC0]'>TITLE</span></h1>
        <p className="text-wrap tracking-wider" data-aos="fade-up">
          Missed out on Bonk, Doge or DogeBonk? No worries! Ghost Cat has your
          back!
          <br /> Get in on the action and let's send $Catsper skyrocketing to
          the moon!
        </p>
        <div className="flex flex-row flex-wrap items-center gap-3  border-[#C9FFE9] border border-4 p-3 rounded-3xl">
          Token Address
          <button
            className="p-3 bg-blue-500 rounded-lg"
            onClick={() => {
              handleCopy();
            }}
          >
            copy
          </button>
        </div>
        <div
          className="flex gap-5 flex-wrap flex-col md:flex-row justify-center lg:justify-start font-cat"
          data-aos="fade-up"
        >
          <button className="px-5 py-3 text-xl rounded-3xl border-[#C9FFE9] border border-4">
            <a
              href=""
              className="flex justify-center items-center gap-3 flex-row-reverse"
            >
              <img
                src="dollar.png"
                className="size-[40px] rounded-full"
                alt=""
               
              />
              BUY NOW
            </a>
          </button>
          <button className="px-5 py-3 text-xl  rounded-3xl border-[#C9FFE9] border border-4">
            <a
              href=""
              className="flex justify-center items-center gap-3 flex-row-reverse"
            >
              <img src="dexs.png" alt="" className="size-[40px] rounded-full" />{" "}
              DEXSCREENER
            </a>
          </button>
          <button className="px-5 py-3 text-xl flex flex-row rounded-3xl border-[#C9FFE9] border border-4">
            <a
              href=""
              className="flex justify-center items-center gap-3 flex-row-reverse"
            >
              <img src="partner4.png" alt="" className="size-[40px]" />
              <p>DEXTOOLS</p>
            </a>
          </button>
        </div>
      </section>
      <section id='about' className="about flex-col px-10 md:flex-row flex justify-center md:px-16 xl:px-[400px] gap-24 py-10 text-center md:text-left">
        <img src="twitter.png" alt="" className="size-[300px]"  data-aos="fade-right" />
        <div className="flex flex-col gap-16 "  data-aos="fade-left">
          <h2 className="text-5xl">TITLE !!</h2>
          <p className="text-2xl ">
            {" "}
            Introducing Ghostcat, known as Catsper, a spectral presence haunting
            moonlit alleys with ethereal grace. With luminous eyes and a
            translucent form, Catsper moves silently, an enigmatic guardian of
            the night. Roaming unseen, Catsper embodies the mysterious allure of
            the supernatural realm, a spectral enforcer of spectral justice.{" "}
          </p>
        </div>
      </section>
      <section  id='tokenomics' className="tokenomics flex md:flex-row gap-10 flex-col justify-center items-center md:gap-24 py-10 " >
        <div className="flex flex-col gap-3 text-center px-10 py-5 shadow-2xl rounded-xl xl:w-[300px] ">
          <h2 className="text-3xl">No Taxes</h2>
          <p>On all Buys and sells</p>
        </div>
        <div className="flex flex-col gap-3 text-center px-10 py-5 shadow-2xl rounded-xl xl:w-[300px]">
          <h2 className="text-3xl">Burnt Lp</h2>
          <p>100% LP Locked Forever</p>
        </div>
        <div className="flex flex-col gap-3 text-center px-10 py-5 shadow-2xl rounded-xl xl:w-[300px]">
          <h2 className="text-3xl">Supply</h2>
          <p>1 Billion</p>
        </div>
      </section>
      <section id='contact' className="flex xl:w-[1080px] mx-0 md:mx-5  py-10 flex-col gap-10 justify-start items-left px-10 bg-[#F0991B] rounded-3xl" >
        <h1 className="text-5xl">Join the <span className='text-[#CCCC1A] bg-[#F1FDC0]'>$Catsper</span> Community.</h1>
        <p>
          Don't miss the hype train – hop aboard with Ghost Cat today <br /> and
          let the memes take you to the moon!{" "}
        </p>
        <div className="flex md:flex-row flex-col gap-10">
          <button className="text-2xl bg-orange-200 p-4 rounded-full">
            Join Twitter
          </button>
          <button className="text-2xl bg-orange-200 p-4 rounded-full">
            Join Telegram
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center md:py-24 py-10 xl:mx-[400px]" id="partners">
        <h1 className="text-4xl ">Partners</h1>
        <div className="flex flex-col lg:flex-row lg:p-10 p-10 md:m-10 gap-10  flex-wrap items-center justify-center">
          <img
            src="/coingecko.png"
            alt=""
            className="w-[200px] border rounded-[50px] p-3 bg-[#F0991B]"
          />
          <img
            src="/coinmarketcap.png"
            alt=""
            className="w-[200px] border rounded-[50px] p-3 bg-[#F0991B]" 
          />
          <img
            src="/moontok.svg"
            alt=""
            className="w-[200px] border rounded-[50px] p-3 bg-[#F0991B]"
          />
          <img
            src="/solana.png"
            alt=""
            className="w-[250px] border rounded-[50px] p-3 bg-[#F0991B]"
          />
          <div className="w-[250px] flex items-center gap-2 border rounded-[50px] p-3 bg-[#F0991B]">
            <img src="/dexs.png" alt="" className="size-[50px] rounded-full" />
            <p className=" font-cat text-2xl text-white">DEXSCREENER</p>
          </div>
          <img
            src="/dextools.webp"
            alt=""
            className="w-[200px] border rounded-[50px] p-3 bg-[#F0991B]"
          />
        </div>
      </section>
      <footer className="  py-10 w-screen md:w-fit">
        <div className="w-full p-4 py-6 lg:py-8 justify-between md:flex md:justify-between md:gap-[500px]">
            <div className="mb-6 md:mb-0 flex flex-col gap-4">
              <a href="" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
              <p>Guranteed moonshot</p>
              <p>gmail:</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                 Contract
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline font-extralight">
                      TITLE
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Socials
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline "
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
        </div>
      </footer>
    </main>
  );
}
