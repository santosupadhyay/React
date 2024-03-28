import React, { useState } from 'react'

function Navbar() {
        const [color, setColor] = useState('white');
                
        
        return (
        <>
        <div>
                <div className="container h-4">
                        <ul className='flex justify-center align-middle gap-5 cursor-pointer bg-slate-400 hover:color-white'>
                                <li><button  onClick={ () => {setColor('red')}}>Red</button></li>
                                <li><button  onClick={ () => {setColor('green')}}>Green</button></li>
                                <li><button  onClick={ () => {setColor('yellow')}}>Yellow</button></li>
                                <li><button  onClick={ () => {setColor('pink')}}>Pink</button></li>
                                <li><button  onClick={ () => {setColor('brown')}}>Brown</button></li>
                                <li><button  onClick={ () => {setColor('lightseagreen')}}>Lightseagreen</button></li>
                                <li><button  onClick={ () => {setColor('black')}}>Black</button></li>
                                <li><button  onClick={ () => {setColor('gold')}}>Gold</button></li>
                                                
                        </ul>
                </div>
                <div className="mainpart w-full border-solid border-2 border-red-600 mt-2 h-screen" style={{backgroundColor : color}}>

                </div>
         </div>
                </>
        )
}

export default Navbar
