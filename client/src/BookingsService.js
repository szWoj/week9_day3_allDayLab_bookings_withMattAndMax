const baseUrl = 'http://localhost:4000/api/bookings/';

export const getBookings = ()=>

{
    return  fetch(baseUrl)
    .then(re=> re.json())
}

export const postBooking = (data)=>
{
    return  fetch(baseUrl, 
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBooking = (id) =>
{
   return fetch(baseUrl + id,
    {
        method: 'DELETE'
    })
}

export const updateBooking = (data, id)=>
{
    return fetch(baseUrl + id,
    {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
}