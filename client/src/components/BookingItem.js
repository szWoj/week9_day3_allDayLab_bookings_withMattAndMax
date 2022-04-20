import React from 'react';

const BookingItem = ({booking, dataDelete, dataUpdate, index}) => 
{
    const handleDelete = () =>
    {
        dataDelete(booking._id)
    }

    const handleCheckIn = ()=>
    {
        const id = booking._id
        const data = {
            name: booking.name,
            email: booking.email,
            check_in: !booking.check_in
        }
        dataUpdate(data, id, index)
    }

    return(
        <>
            <h2>Name: {booking.name}</h2>
            <p>Email: {booking.email}</p>
             <p>Check in status :</p>{booking.check_in ? <button onClick={handleCheckIn}>&#128308;</button> : <button onClick={handleCheckIn}>&#128994;</button>}
            <button onClick={handleDelete}><img src='https://www.kindpng.com/picc/m/296-2961763_trash-icon-png-rubbish-white-bin-transparent-png.png' height={20} width={20}></img></button>
        </>
    )
}

export default BookingItem