"use client"
import React from 'react'
import axios from '@/utils/axios'
import {useEffect, useState } from 'react'
import Image from 'next/image'
import back from '@/public/defult.png'

const formatApiDate = (rawDate) => {
  const date = new Date(rawDate);
  // Get the month name
  const monthName = date.toLocaleDateString('en-US', { month: 'short' });
  // Get the day and year
  const day = date.getDate();
  const year = date.getFullYear();
  // Construct the formatted date string
  const formattedDate = `${day} ${monthName} ${year}`;
  return formattedDate;
};

const page = () => {
  const[Posts, setPosts]= useState([])


    const getPosts= async ()=>{
      try {
        const {data} = await axios.get("/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json");
        const appointment = await data;
  
        console.log(appointment.appointments)

        setPosts(appointment.appointments);
        
      } catch (error) {
        console.log('Error fetching data:',error)
      }
    }
  
    useEffect(() => {
      console.log("Api called!");
      getPosts();
  }, []);
  

  return (
    <div  className='h-2/4 my-2 border-slate-100 px-5 py-5	ml-20'>

<h2  className='text-2xl font-semibold text-cyan-600 mt-10 mb-8'>Today's Appointment List</h2>
      <div className='h-12 my-2 bg-gray-100	font-medium	font-sans	border-b-2 w-4/5 text-zinc-400 px-8 flex justify-between uppercase text-center	items-center	'>
            <div  className='items-start text-start	w-1/5'>Patients</div>
            <div className='w-2/12 ml-6 items-start text-left'>Date</div>
            <div className='w-2/12 ml-14 items-start text-left'>Time</div>
            <div className='w-1/6 items-start text-left'>Doctor</div>
            <div className='w-1/6 items-start text-left ml-5'>Injure</div>
            <div  className='w-1/6 items-end text-right '>Action</div>
      </div>
    
    {  Posts ? (
      <div>
      {  Posts.map((item)=>(

        <div key={item.patient_name} className='h-12 my-2 font-medium	font-sans	border-b-2 w-4/5 text-zinc-400 px-7 flex justify-between uppercase text-center items-center	'>
          <div  className='place-items-start flex justify-center w-1/5'>
             
              <Image  className='w-1/5 h-full bg-transparent'
      src={back}
    alt="Picture of the author"
     width="2500"
     height="320"
    />
        <div  className='w-4/5 h-full ml-2  text-black'>
               <h6 className='items-start text-left font-smbold w-full h-2/4 whitespace-nowrap'>{item.patient_name}</h6>
               <p  className='items-start text-zinc-300		text-left w-full h-2/4'>+125 3665 354</p>
             </div>
           </div>
           <div className='items-center flex gap-2 ml-6 text-slate-500 text-center w-2/12 whitespace-nowrap'>
           <svg class="w-6 h-6 text-zinc-500 z-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"/>
  </svg>
  {formatApiDate(item.appointment_date)}
             </div>

           <div className='items-end text-zinc-500 text-left ml-14 flex flex-row gap-2 w-2/12 whitespace-nowrap'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
<path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 22.476562 11.978516 A 1.50015 1.50015 0 0 0 21 13.5 L 21 24.5 A 1.50015 1.50015 0 0 0 21.439453 25.560547 L 26.439453 30.560547 A 1.50015 1.50015 0 1 0 28.560547 28.439453 L 24 23.878906 L 24 13.5 A 1.50015 1.50015 0 0 0 22.476562 11.978516 z"></path>
</svg>
{item.appointment_time}
         
         </div>
           <div className='w-1/6 flex text-zinc-500 flex-row gap-2 items-start text-left'>
           <svg class="w-5 h-5 bg-emerald-500	text-slate-50	rounded-full px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
  </svg>
  {item.doctor}</div>

           <div className='w-1/6 text-zinc-500 items-start rounded-xl bg-blue-100 text-left'>
            <div  className='px-px ml-3 text-sky-700	 py-2	'>
            {item.injury}
            </div></div>

           <div  className='w-1/6 items-end text-right'>
           <svg class="w-6 h-6 ml-32 font-bold text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h0m0 6h0m0 6h0"/>
  </svg>
           </div>
            
     </div>

      ))}
      </div>
    )
    :"loading"
    }

    
 


    </div>
  )
}

export default page