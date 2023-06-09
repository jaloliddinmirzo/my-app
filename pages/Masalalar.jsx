import Image from 'next/image'
import { Alata } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Nov from '../components/Nov'
import Card from '@/components/Card'
import { useState } from 'react'
import data from '@/components/Base'

const alata = Alata({
  subsets: ['latin'],
  weight: "400"
})

function Masalalar() {

  const [togle, setTogle] = useState(false)



  return (
    <div className='flex flex-col  w-full'>
      <Head>
        <title>Bosh sahifa</title>
      </Head>
      <heder className={`${alata.className} header   z-10 backdrop-filter flex sticky top-0 left-0  items-center justify-between px-6 py-6`}>
        <nav className='flex gap-8 flex-wrap container items-center  '>
          <Image
            className="relative "
            src="/logo.png"
            alt="Next.js Logo"
            width={280}
            height={57}
            priority
          />
          {<Nov></Nov>}
        </nav>
        {/* <Ul /> */}
      </heder>

      <main className='  flex-grow  grad  flex items-center justify-center'>

       {!togle ? <section key={"lll"} className=' py-[63px] container   px-10 -z-0 flex items-center justify-center  mx-auto  '>
          <div className="  mx-auto flex gap-10 flex-wrap max-md:justify-center">
            <div className="card">
              <div className="card-front">
                <Image
                  className="relative "
                  src="/card1.svg"
                  alt="Next.js Logo"
                  width={280}
                  height={57}
                  priority
                />
                <p className="title">Matematika</p>
                <p className="subtitle">Math Master</p>
              </div>
              <div className="card-back flex flex-col items-center justify-center py-10">
                <p className='mb-10'>Siz ushbu kitob bilan algebrani 0 dan mutaxasis darajaga yetasiz.</p>
                <button>
                  <div>
                    <span>
                      <p>Masalalar</p><p>:)</p>
                    </span>
                  </div>
                  <div>
                    <span onClick={()=> setTogle(prew=> !prew)}>
                      <p>Start</p><p>:D</p>
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <Image
                  className="relative "
                  src="/card1.svg"
                  alt="Next.js Logo"
                  width={280}
                  height={57}
                  priority
                />
                <p className="title">Geometriya</p>
                <p className="subtitle">Math Master</p>
              </div>
              <div className="card-back flex flex-col items-center justify-center py-10">
                <p className='mb-10'>Siz ushbu kitob bilan algebrani 0 dan mutaxasis darajaga yetasiz.</p>
                <button>
                  <div>
                    <span>
                      <p>Masalalar</p><p>:)</p>
                    </span>
                  </div>
                  <div>
                    <span >
                      <p>Start</p><p>:D</p>
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <Image
                  className="relative "
                  src="/card1.svg"
                  alt="Next.js Logo"
                  width={280}
                  height={57}
                  priority
                />
                <p className="title">Fizika</p>
                <p className="subtitle">Math Master</p>
              </div>
              <div className="card-back flex flex-col items-center justify-center py-10">
                <p className='mb-10'>Siz ushbu kitob bilan algebrani 0 dan mutaxasis darajaga yetasiz.</p>
                <button>
                  <div>
                    <span>
                      <p>Masalalar</p><p>:)</p>
                    </span>
                  </div>
                  <div>
                    <span >
                      <p>Start</p><p>:D</p>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section> :  <Card key={data[0].question} data={data}></Card> }
      </main>

      <footer className='bg-slate-300  py-[39px] px-5 gol  '>
        <div className="footer-list flex container items-center py-10 px-10 flex-wrap gap-5 justify-between">
          <div className="footer-img ">
            <Image
              className="relative "
              src="/logo.png"
              alt="Next.js Logo"
              width={280}
              height={57}
              priority
            />
          </div>
          <div className="footer-social flex gap-4">
            <a href="https://www.instagram.com/jaloliddin9785/">
              <Image
                className="relative mb-2 "
                src="/insta.png"
                alt="Next.js Logo"
                width={35}
                height={35}
                priority
              />
            </a>
            <a href="https://t.me/mirzo_3">
              <Image
                className="relative mb-2 "
                src="/tel.png"
                alt="Next.js Logo"
                width={35}
                height={35}
                priority
              />
            </a>
            <a href="https://www.facebook.com">
              <Image
                className="relative mb-2 "
                src="/fac.png"
                alt="Next.js Logo"
                width={35}
                height={35}
                priority
              />
            </a>
            <a href="https://github.com/Jaloliddin7">
              <Image
                className="relative mb-2 "
                src="/git.svg"
                alt="Next.js Logo"
                width={35}
                height={35}
                priority
              />
            </a>
          </div>
        </div>
        <ul className='flex justify-center mx-auto px-10 gap-20 mb-6 flex-wrap '>
          <li className='flex flex-col '>
            <a className=' ease transition-all' href="#"> Bosh Sahifa</a>
            <a className=' ease transition-all' href="#"> Masalalar </a>
            <a className=' ease transition-all' href="#">Video Darslar </a>
            <a className=' ease transition-all' href="#">Algebra </a>
          </li>
          <li className='flex flex-col'>
            <a className=' ease transition-all' href="#">Geometriya</a>
            <a className=' ease transition-all' href="#">Geometriya  </a>
            <a className=' ease transition-all' href="#">Fizika </a>
            <a className=' ease transition-all' href="#"> Izohlar</a>
          </li>

          <li className='flex flex-col'>
            <a className=' ease transition-all' href="#"> Kontaktlar</a>
            <a className=' ease transition-all' href="#"> Mulohazalar</a>
          </li>
        <h1 className='font-semibold'>
          THE AUTHOR: Abdutolipov Jaloliddin
        </h1>
        </ul>
      </footer>

    </div>
  )
}

export default Masalalar


