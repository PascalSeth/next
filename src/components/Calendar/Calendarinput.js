import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Calendarinput({onDateChange}) {
    const [selectedDate, setSelectedDate] = useState(null);

  const handleClearDate = () => {
    setSelectedDate(null);
    localStorage.removeItem('selectedDate');
    onDateChange(null);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem('selectedDate', date.toISOString());
    onDateChange(date);
  };

  return (
    <div className="outline-none overflow-hidden w-fit flex  items-center justify-between bg-none  ">
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          className="outline-none  border-none bg-transparent"
          placeholderText="Date"
          
        />
      </div>
      <div className="flex overflow-hidden items-center bg-red-600  px-[0.6vw] rounded-lg text-white" >
        {selectedDate && (
          <button className="border-none outline-none bg-none" onClick={handleClearDate}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}