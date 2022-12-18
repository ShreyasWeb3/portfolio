import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject:string;
  message:string;
};

// type Props = {};

const ContactMe = (props: Inputs) => {
  
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:shreyasweb3@gmail.com ?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}`;
  }

  return (
    <div className='h-screen relative flex flex-col justify-evenly text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center '>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl '>Contact</h3>
          <div className='flex flex-col space-y-10 '>
            <h4 className='text-3xl font-semibold '>
              Let's Discuss further  
              <span className='text-gray-500'> Shall we</span>
            </h4>

            <div>
              <div className='flex item-center space-x-5 justify-center py-3'>
                <PhoneIcon className='text-[#F7AB0A] h-9 w-9 animate-pulse'/>
                <p className='text-2xl'>+91-7022683659</p>
              </div>

              <div className='flex item-center space-x-5 justify-center py-3'>
                
                <EnvelopeIcon className='text-[#F7AB0A] h-9 w-9 animate-pulse'/>
                <p className='text-2xl'>shreyasweb3@gmail.com</p>
              </div>

              <div className='flex item-center space-x-5 justify-center pb-10 pt-3'>
              <MapPinIcon className='text-[#F7AB0A] h-9 w-9 animate-pulse'/>
                <p className='text-2xl'>Bengaluru, Karnataka, 560037</p>
              </div>

              {/*  */}

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                {/*  */}
                  <input {...register('name')} type="text" className='contactInput' placeholder='Name'/>
                  <input {...register('email')} type="email" className='contactInput' placeholder='Email'/>
                </div>
                <input {...register('subject')} type="text" className='contactInput' placeholder='Subject'/>
                {/*  */}
                <textarea {...register('message')} className='contactInput' placeholder='Message'/>
                <button className='bg-[#F7AB0A] py-5 px-10 text-black font-bold text-2xl'>Submit</button>
              </form>

            </div>

          </div>
    </div>
  )
}

export default ContactMe