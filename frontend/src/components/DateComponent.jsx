import React from 'react'
import { Datepicker } from 'flowbite-react';
function DateComponent() {
    return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}

export default DateComponent
