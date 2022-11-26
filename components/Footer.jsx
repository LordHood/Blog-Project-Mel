import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className='box-border text-white bg-[#3E4A42ff]'>
        <div className='justify-center items-center text-center flex-col pt-4 pb-4'>
            <div className='font-bold text-xl mb-1'>Mel's Blog</div>
            <div className='mb-2'>This is a spot in the footer that might be used to describe yourself as a bio or give some extra information that you like. I'm just making up words at this point so I can fill this are with text, to make it look better</div>
            <div className=''>
                <FontAwesomeIcon className='text-2xl mr-5' icon={faEnvelope} />
                <FontAwesomeIcon className='text-2xl pr-5' icon={faSquareInstagram} />
                <FontAwesomeIcon className='text-2xl pr-5' icon={faHandshake} />
                <FontAwesomeIcon className='text-2xl' icon={faTwitter} />

            </div>
            <div>
                <div>copyright &copy; 2022 designed by victor</div>
            </div>
        </div>
    </footer>

  )
}

export default Footer