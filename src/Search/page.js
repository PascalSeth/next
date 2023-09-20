'use client'
import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { useRouter } from 'next/navigation'

function Search() {
    const router = useRouter(); // Use the useRouter hook
  
    // Access query parameters using the query object from useRouter
    const origin = router.query.origin !== undefined ? router.query.origin : '';
    const destination = router.query.destination !== undefined ? router.query.destination : '';
    const ticketQuantity = router.query.quantity !== undefined ? parseInt(router.query.quantity) : '';
  
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRDate, setSelectedRDate] = useState(null);
  
    const handleSearch = (formData) => {
      setSelectedDate(formData.selectedDate);
      setSelectedRDate(formData.selectedRDate);
    };
  
    return (
      <div className='searchpg'>
        <div className='title2'>
          <h4 className='orange'>Book A Bus, Journey With Ease...</h4>
          <h5 className='normal'>
            {' '}
            Check Bus Schedules, Compare Prices and Book Ticket Online
          </h5>
        </div>
        <div>
          <Form
            origin={origin}
            destination={destination}
            ticketQuantity={ticketQuantity}
            onSearch={handleSearch}
          />
        </div>
      <div>

      </div>
    </div>
  );
}

export default Search;
