use hotel;

db.dropDatabase();

db.bookings.insertMany(
    [
        {
            name: "Szymon Wojdyla",
            email: "Szymon@gmail.com",
            check_in: false
        },
        {
            name: "Max Cardwell",
            email: 'max@gmail.co.uk',
            check_in: true
        },
        {
            name: "Matt Matthaiou",
            email: "matt@gmail.com",
            check_in : false
        }
    ]);