import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { book, remove } from "../redux/Bookings/actions";

function HomePage() {
  const totalBooking = useSelector((state) => state.bookings)
  const dispatch = useDispatch();

  const [destinationFrom, setDestinationFrom] = useState('');
  const [destinationTo, setDestinationTo] = useState('');
  const [date, setDate] = useState('');
  const [guest, setGuest] = useState('');
  const [ticketClass, setTicketClass] = useState('');



  const handleBooking = (event) => {
    event.preventDefault();
    const value = {
      id: totalBooking?.length + 1,
      destination_from: destinationFrom,
      destination_to: destinationTo,
      date,
      guests: guest,
      class: ticketClass
    }
    console.log('Booking:', value);
    dispatch(book(value))

    // Reset the form values
    setDestinationFrom('');
    setDestinationTo('');
    setDate('');
    setGuest('');
    setTicketClass('');
  }
  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleDestinationFromChange = (event) => {
    if (event.target.value == destinationTo) {
      setDestinationTo('');
    }
    setDestinationFrom(event.target.value);
  };

  const handleDestinationToChange = (event) => {
    if (event.target.value !== destinationFrom) {
      setDestinationTo(event.target.value);
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleGuestChange = (event) => {
    setGuest(event.target.value);
  };

  const handleTicketClassChange = (event) => {
    setTicketClass(event.target.value);
  };

  return (
    <div>
      <header id="header">
        <div class="container">
          <img src="./img/lws-logo.svg" alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>


      <section>
        {/* <!-- Input Data --> */}
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
          <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form class="first-hero lws-inputform">
              {/* <!-- From --> */}
              <div class="des-from">
                <p>Destination From</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    value={destinationFrom}
                    onChange={handleDestinationFromChange}
                    class="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div class="des-from">
                <p>Destination To</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    value={destinationTo}
                    onChange={handleDestinationToChange}
                    class="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div class="des-from">
                <p>Journey Date</p>
                <input
                  value={date}
                  onChange={handleDateChange}
                  type="date"
                  class="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required />
              </div>

              {/* <!-- Guests --> */}
              <div class="des-from">
                <p>Guests</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    value={guest}
                    onChange={handleGuestChange}
                    class="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required>
                    <option value="" hidden>Please Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div class="des-from !border-r-0">
                <p>Class</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    value={ticketClass}
                    onChange={handleTicketClassChange}
                    class="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required>
                    <option value="" hidden>Please Select</option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button onClick={handleBooking} class="addCity" type="submit" id="lws-addCity">
                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span class="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div class="table-container">
          <table class="booking-table">
            <thead class="bg-gray-100/50">
              <tr class="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th class="text-center">Journey Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Class</th>
                <th class="text-center">Delete</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
              {/* <!-- Row 1 --> */}
              {
                totalBooking.map((booking) => (
                  <tr key={booking.id} className="lws-bookedTable text-black">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <p className="lws-bookedFrom">{booking.destination_from}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="lws-bookedTo">{booking.destination_to}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className="lws-bookedDate">{booking.date}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className="lws-bookedGustes">{booking.guests}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="lws-bookedClass">{booking.class}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-4">
                        <button className="lws-remove" onClick={() => handleRemove(booking.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HomePage;