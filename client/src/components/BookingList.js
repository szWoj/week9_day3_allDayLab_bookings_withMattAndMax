import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({bookings, dataDelete, dataUpdate})=>

{

    const bookingList = bookings.map((booking, index)=>
    {
        return(
            <BookingItem booking={booking} index={index} key={booking._id} dataDelete={dataDelete} dataUpdate={dataUpdate}/>
        )
    })

    return(
        <>
            {bookingList}
        </>
    )
}

export default BookingList;