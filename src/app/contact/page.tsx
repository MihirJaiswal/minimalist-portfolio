'use client'
import ContactForm from '@/components/contact/Contact'
import Footer from '@/components/Footer';
import TopNav from '@/components/Navbar';
import React from 'react'

const page = () => {
    const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Form submitted with data:', data);
        // Here you can handle the form submission, like sending data to a server
      };
  return (
    <div className="bg-bg1 dark:bg-bg2">
        <TopNav/>
         <ContactForm onSubmit={handleFormSubmit} />
         <Footer/>
    </div>
  )
}

export default page