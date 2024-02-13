// Landing.tsx
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Landing: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5 // adjust as needed
  })

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='font-poppins flex min-h-screen w-[90%] flex-col items-center justify-center text-center md:w-[90%] 2xl:w-[70%]'>
      <div className='pt-32'>
          <motion.div
          className='grid h-[80%] w-full items-center gap-2 md:grid-cols-2'
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
        >
          <div className='leading-12 order-2 flex flex-col gap-4  text-start md:order-1'>
            <div className='flex flex-col'>
              <span className='text-center text-[7vw] font-normal tracking-wide text-[#000] shadow-[#8A00AC]  lg:text-start lg:text-[4rem]'>
                ask
                <span className='text-[10vw] font-bold md:text-[5rem] xl:text-[7rem]'>
                  Marked
                </span>
              </span>
              <span className='text-[1rem] font-bold text-black lg:text-[1.5rem]  lg:leading-10'>
                Whispers in the Dark: Find the Answers, No
                <span className='text-[1.2rem] font-bold text-[#8A00AC] lg:text-[2rem]'>
                  {' Question Marks'}
                </span>
              </span>
              <span className='pt-4  text-[1rem] font-bold leading-6 text-black'>
                AskMark:
                <span className=' font-normal '>
                  {
                    ' Your shadowed question hub. Ask anything, fearlessly hidden. Join now and delve into anonymous confession with confidence in the shadows.'
                  }
                </span>
              </span>
            </div>

            <div className='flex w-full flex-col   items-center justify-center gap-2 text-[.8rem] text-white  md:flex-row md:justify-start'>
              <button className='rounded-xl bg-[#AF05D9] px-[30vw] py-[.8rem] md:px-10'>
                SIGN IN
              </button>
              <button className='px rounded-xl bg-black px-[30vw] py-[.8rem]  md:px-10'>
                SIGN UP
              </button>
            </div>
          </div>
          <div className='order-1 flex items-center md:order-2'>
            <div className='relative h-[100vw] w-[90vw] md:h-[65vh]  md:w-[30rem] xl:w-[40rem]'>
              <Image src={'/hero.svg'} fill alt='hero' />
            </div>
          </div>
          </motion.div>
      </div>
      <div className='md:px-10 px-2 py-20  font-semibold text-white'>
        <div className='flex min-h-full  min-w-[60vw] flex-col rounded-[1.2rem] bg-[#C8AEFF]'>
          <div className='p-2'>
            <div className='rounded-[1rem] bg-[#8062B0] py-4'>
              How askMarked work?
            </div>
          </div>
          <div className='p-2 md:text-[1rem] text-[.6rem] '>
            <div className='flex flex-col rounded-[1rem] bg-[#8062B0] px-2 md:px-20 leading-2 md:leading-8 py-4'>
              Introducing AskMarked: the platform revolutionizing anonymous Q&A
              sessions. <br/>AskMarked is a groundbreaking platform revolutionizing
              anonymous Q&A sessions, allowing users to effortlessly manage and
              curate questions through a personalized profile. By generating a
              unique link, users can share it with their audience for anonymous
              submissions, maintaining full control over published questions and
              ensuring a secure and curated experience. The platform prioritizes
              privacy, enabling users to review, post, or dismiss questions
              while fostering open and honest engagement. AskMarked empowers
              users to connect meaningfully, facilitating dialogue and building
              connections without the need to reveal identities, making it an
              ideal tool for feedback gathering, Q&A sessions, or sparking
              discussions. Join AskMarked and redefine your online interactions
              through a seamless and private question-and-answer experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
