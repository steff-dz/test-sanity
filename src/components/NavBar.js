import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'


export default function NavBar(){
    return (
        <header className="bg-yellow-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-white-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest" >
                        Steff
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white bg-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white bg-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white bg-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800">
                        About Me 
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/stefanie-dz/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.instagram.com/stefanie_dziadkowiec/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}