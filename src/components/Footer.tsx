import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-paragraph mt-10 p-10 flex justify-evenly items-center'>
        <h1 className='font-extrabold text-2xl'>Made by : <Link href={"https://akshit-resume.vercel.app"} target='_blank' className='text-primary underline'>Akshit</Link></h1>
        <Link href={"https://github.com/Ak2407"} target='_blank' className='text-lg bg-tertiary p-4 rounded-full text-paragraph'>GitHub</Link>
    </footer>
  )
}

export default Footer