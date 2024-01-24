import React from "react"
import { TypeAnimation } from 'react-type-animation'
import {FaGithub} from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className='w-full h-screen object-cover object-left scale-x-[-1' src='../../src/assets/brutalism-background.jpg' alt=''></img>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Steve</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Coder',
                                1500, 
                                'Developer',
                                1500,
                                'Computer Enthusiast',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px]">
                        <a href='https://github.com/PolynomialD/'>
                        <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main