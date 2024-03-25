import React from 'react'

function Navbar() {
        let backgroundColor = 'white';
        function getRed () {
                
        }
        return (
                <>
                        <div>
                                <div className="container h-4">
                                        <ul className='flex justify-center align-middle gap-5 cursor-pointer bg-slate-400 hover:color-white'>
                                                <li><button onClick={getRed}>Red</button></li>
                                                <li>Green</li>
                                                <li>Yellow</li>
                                                <li>Blue</li>
                                                <li>White</li>
                                                <li>OceanBlue</li>
                                                <li>Purple</li>
                                                <li>Orange</li>
                                                <li>Pink</li>
                                                <li>Black</li>
                                        </ul>
                                </div>
                                <div className="mainpart w-full border-solid border-2 border-red-600 mt-2 h-96">

                                </div>
                        </div>
                </>
        )
}

export default Navbar
