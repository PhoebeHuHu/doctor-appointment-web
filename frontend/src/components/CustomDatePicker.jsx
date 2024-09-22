import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function CustomDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy"
        className='border-2 border-gray-600 rounded-md focus:border-primary outline-none p-2'
      />
    </div>
  );
}

export default CustomDatePicker