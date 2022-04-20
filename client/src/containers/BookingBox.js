import React, {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'
import { deleteBooking, getBookings, postBooking, updateBooking } from '../BookingsService';

const BookingBox = ()=>
{
    const [bookings, setBookings] = useState([]);

    useEffect(()=>
    {
        getBookings()
        .then((res)=>{
            setBookings(res)
        })

    },[])
    
    // const getBookings = ()=>
    // {
    //     fetch('http://localhost:4000/api/bookings')
    //     .then(re=> re.json())
    //     .then(res => setBookings(res))
    // }

    const dataPost = (data)=>
    {
        const newBookings = [...bookings]
        postBooking(data)
        .then(res => {
            newBookings.push(res)
            setBookings(newBookings)
        })
    }

    const dataDelete = (id)=>
    {
        const newBookings = [...bookings]
        deleteBooking(id)
        newBookings.splice(newBookings.indexOf(id), 1)
        setBookings(newBookings)
        
    }

    const dataUpdate = (data, id, index) =>
    {
        const newBookings = [...bookings]
        updateBooking(data, id)
        newBookings[index].check_in = data.check_in
        setBookings(newBookings)
    }




    return (
        <>
        <h1>Hi</h1>
        <BookingForm dataPost={dataPost}/>
        <BookingList bookings={bookings} dataDelete={dataDelete} dataUpdate={dataUpdate}/>
        
        </>
    )
}

export default BookingBox;