import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        style={{
          position: 'absolute',   // Position it absolutely on the page
          top: '250px',            // Distance from the top edge of the page
          left: '150px',           // Distance from the left edge of the page
          width: '300px',         // Adjust width as needed
          height: 'auto',         // Adjust height as needed
          padding: '20px',        // Padding inside the calendar
          border: '1px solid #ccc', // Optional border for visibility
        }}
      />
    </LocalizationProvider>
  );
}
