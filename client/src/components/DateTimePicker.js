import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';

registerLocale('fr', fr)
setDefaultLocale('fr');

function DateDatePicker () {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      locale="fr"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Heure"
      dateFormat="dd/MM/yyyy"
      />
    );
  };

function DateTimePicker () {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      locale="fr"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Heure"
      dateFormat="dd/MM/yyyy - hh:mm"
      />
    );
  };

export default DateTimePicker;