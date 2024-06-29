import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Booking =({tour})=>{
    const {price} = tour;
    const navigate = useNavigate();
    const [credentials, setCredentials]=useState({
        userId: '01',
        userEmail :'abc@gmail.com',
        firstName: '',
        lastName: '',
        phone: '',
        guestSize: '',
        bookAt:'',
        addInfo:'',
    });

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 10;
    const totalAmount = (Number(price) * Number(credentials.guestSize) )+ Number(serviceFee);
    const handleClick = e =>{
        e.preventDefault()

        navigate('/thankyou')
    }
    return(
        <div>
            <h3>Book Your Trip Now</h3>
            <h5 className='border-b border-black'>${price}/per person</h5>
            <form  className='my-3' onSubmit={handleClick}>
                <div className='flex gap-4' >
                    <input  id='firstName' type="text" placeholder='First Name' className='w-[420px] h-8 p-1 border border-black' required onChange={handleChange}></input>
                    <input  id='lastName' type="text" placeholder='Last Name'  className='w-[420px] h-8 p-1 border border-black' onChange={handleChange}></input>
                </div>
                <div  className='flex gap-4'>
                    <input id='phone' className='w-[280px] h-8 p-1 my-2 border border-black' type="text" placeholder='Phone Number' required onChange={handleChange}></input>
                    <input id='bookAt' className='w-[280px] h-8 p-1 my-2 border border-black' type="date" placeholder='Date' required onChange={handleChange}></input>
                    <input id='guestSize' className='w-[255px] h-8 p-1 my-2 border border-black' type="number" placeholder='Number of people' required onChange={handleChange}></input>
                </div>
                <textarea id='addInfo' className='w-[840px] h-[40px] p-1 border border-black' placeholder='Additional Details' onChange={handleChange}></textarea>
                <div className='flex gap-2'>
                    <div>
                        <div className='flex gap-4'>
                            <h6>${price} X {credentials.guestSize} person</h6>
                            <span>${price*credentials.guestSize}</span>
                        </div>
                        <div className='flex gap-4'>
                            <h6>Service Charge</h6>
                            <span>${serviceFee}</span>
                        </div>
                    </div>
                    <div className="ml-[520px] flex gap-2 font-semibold">
                        <h6>Total Amount</h6>
                        <span className=''>${totalAmount}</span>
                    </div>
                </div>
                <button onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}} type="submit" className='w-[840px] my-2 py-1 px-2 rounded-2xl bg-[#dfa856] shadow-none border border-black'>Book Now</button>
            </form>
        </div>
    )
}

export default Booking;