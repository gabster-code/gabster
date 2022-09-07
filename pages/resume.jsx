import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Gab | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Gab Jornacion</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/kevin-karl-jornacion-ab94aa8b/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/gabster-code'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web and IT Infrastructure Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web and IT Infrastructure Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated IT professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> MongoDB
          </p>
         {/**
          * <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
          * 
          */} 
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
      {/* Experience */}
      <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Discord Bot Development</span>
            <span className='px-2'>|</span>Philippines
          </p>
          <p className='py-1 italic'>Personal Projects(2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created Custom Discord Bots for NFT Pinas, Fibonaxie Guild, Gratitude Gang, Cash Cows
            </li>
            <li>
              Utilized DiscordJS, NodeJS and REPLIT for Developing Discord Bots. 
            </li>
            <li>
              Utilizes APIs from Web3 sources to provide either Sales/Listing of NFTs, Generating QR Access and stats for Axie Infinity Game players, alerting for low gas fees on ETH
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>NFT Pinas</span>
            <span className='px-2'>|</span>Philippines
          </p>
          <p className='py-1 italic'>Co-Founder/Content Creator (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created Educational Content on social media(IG, FB, Spotify, Twitter, Anchor) about Web3
            </li>
            <li>
              Cultivated a community of NFT/Crypto enthusiasts and bring them together to share, explore and educate others about the Web3 space.
            </li>
            <li>
              Became a platform for NFT Projects to share their story though podcasts and hosted twitter spaces
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              StrategicSynergy Inc.
            </span>
            <span className='px-2'>|</span>Makati, Philippines
          </p>
          <p className='py-1 italic'>Solutions Architect (2013 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Gather, analyze and translate customer pain points and requirements into a carefully crafted solution using various appropriate technologies that we carry
            </li>
            <li>
             Identifies business opportunities with aligned interests to customers business objectives, goals and requirements
            </li>
            <li>
            •	Provide technology roadmaps and solution alternatives that balances both commercial aspects and architectural aspects
            </li>
           
          </ul>
        </div>
        
        
      </div>
    </>
  );
};

export default resume;