import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Authprovider';

const BookingModal = ({orders, setOrders} ) => {
    const {name: product_name, resale_price } = orders;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const resale_price = form.resale_price.value
        const product_name = form.product_name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            product_name,
            resale_price,
            email,
            phone,
            location
        }
        // console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                 'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                toast.success('booking confirm')
                setOrders(null)
                // refetch();
            }
            else {
                toast.error(data.message);
            }
        })
    }

     
  return (
    <div>
        <div>
            <input type="checkbox" id="booking-Modal" className="modal-toggle" />
            <div className="modal">
            
                <div className="modal-box relative">
                    <label htmlFor="booking-Modal" className="btn btn-sm btn-circle bg-primary absolute text-white right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold font-[Metamorphous] text-center"> Booking For {orders.name}</h3>
                    <form  onSubmit={handleBooking}  className='grid gap-5 grid-cols-1 mt-10'>
                        {/* <input name="text" disabled value={date} className="input  " /> */}

                        <input name="product_name" type='text' defaultValue={product_name}  disabled placeholder="Product name" className="input input-bordered " />
                        <input name="resale_price" type='text' defaultValue={resale_price}   disabled className="input input-bordered " />
                        <input name="email" type='email'defaultValue={user?.email}   disabled placeholder="Email Address" className="input input-bordered " />
                        <input name="phone" type='text' placeholder="Phone Number" className="input input-bordered " />
                        <input name="location" type='text' placeholder="Meeting Location" className="input input-bordered " />

                        <input className='btn font-[Metamorphous]  bg-gradient-to-r from-primary to-secondary text-white' type="submit" value="Book" />
                        {/* <input className='btn btn-accent' type="submit">Submit</input> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookingModal;