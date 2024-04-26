// Landing.tsx
import React from 'react'
import Image from 'next/image'

const Landing: React.FC = () => {
  return (
    <div className='font-poppins flex  w-[90%] flex-col items-center  text-center md:w-[90%] 2xl:w-[70%]'>
      <div className=''>
        <div className='grid h-[80%] w-full items-center md:grid-cols-2 lg:gap-6'>
          <div className='leading-12 order-2 flex flex-col gap-4 text-center md:order-1 md:text-start'>
            <div className='flex flex-col'>
              <span className=' text-[7vw] font-normal tracking-wide text-[#000] shadow-[#8A00AC]   lg:text-[2rem]'>
                ask
                <span className='text-[15vw] font-bold md:text-[4rem] xl:text-[7rem]'>
                  Marked
                </span>
              </span>
              <span className='text-[1rem] font-bold text-black lg:text-[1.8rem] lg:leading-10'>
                Whispers in the Dark: Find the Answers, No
                <span className='text-[1.2rem] font-bold text-[#8A00AC] lg:text-[2rem]'>
                  {' Question Marks'}
                </span>
              </span>
              <span className='hidden  pt-4 text-[1rem] font-bold leading-6 text-black lg:block'>
                AskMark:
                <span className=' font-normal '>
                  {
                    ' Your shadowed question hub. Ask anything, fearlessly hidden. Join now and delve into anonymous confession with confidence in the shadows.'
                  }
                </span>
              </span>
            </div>

            <div className='flex w-full flex-col   items-center justify-center gap-2 text-[.8rem] text-white  md:flex-row md:justify-start'>
              <button
                className='rounded-xl bg-[#AF05D9] px-[30vw] py-[.8rem] md:px-10'
                onClick={() => (window.location.href = '/login')}
              >
                SIGN IN
              </button>
                   <button className='px rounded-xl bg-black px-[30vw] py-[.8rem]  md:px-10'
              onClick={() => (window.location.href = '/register')}>
                SIGN UP
              </button>
            </div>
          </div>
          <div className='order-1 flex items-center md:order-2'>
            <div className='relative h-[100vw] w-[90vw] md:h-[65vh]  md:w-[30rem] xl:w-[40rem]'>
              <Image src={'/hero.svg'} fill alt='hero' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-2 py-20 font-semibold  text-white md:px-10'>
        <div className='flex min-h-full  min-w-[60vw] flex-col rounded-[1.2rem] bg-[#C8AEFF]'>
          <div className='p-2'>
            <div className='rounded-[1rem] bg-[#8062B0] py-4 font-bold text-[1.5rem]'>
              How askMarked work?
            </div>
          </div>
          <div className='p-2 text-start text-[.8rem] md:text-[1.2rem] '>
            <div className='leading-2 flex flex-col gap-4 rounded-[1rem] bg-[#8062B0] px-2 py-10  md:px-20 md:leading-8'>
              <span>
                Introducing <strong>AskMarked</strong>: the coolest new platform
                for anonymous Q&A sessions!
              </span>
              <span>
                Say goodbye to awkward or uncomfortable moments during Q&A
                sessions – <b>AskMarked</b> is here to make it smooth and fun.
                It's like having your own personal question curator, but with a
                super cool twist!
              </span>
              <span>
                With <b>AskMarked</b>, you get to control the questions without
                anyone knowing who asked them. How awesome is that? You simply
                share your unique link, and voila! Your audience can submit
                questions anonymously. But don't worry, you're the boss here –
                you decide which questions to publish and which ones to skip.
              </span>
              <span>
                <b>Privacy?</b> Oh yeah, we've got you covered. Your identity
                stays safe while you foster genuine conversations. It's all
                about connecting without the pressure of revealing who you are.
              </span>
              <span>
                <b>
                Ready to shake up your online interactions? Join AskMarked and
                let's make Q&A sessions exciting and drama-free!
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
