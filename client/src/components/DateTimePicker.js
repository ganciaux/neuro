import React, { useState, forwardRef } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import range from "lodash/range";

registerLocale('fr', fr)
setDefaultLocale('fr');

export function DateDatePicker () {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="example-custom-input btn btn-primary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      locale="fr"
      dateFormat="dd/MM/yyyy"
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select">
      </DatePicker>
    );
  };

export function DateTimePicker (props) {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="example-custom-input btn btn-primary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleChange = date => {
        props.onchange(date);
    }
  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => { setStartDate(date); handleChange(date) }}
      customInput={<ExampleCustomInput />}
      showTimeSelect
      locale="fr"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Heure"
      dateFormat="dd/MM/yyyy - HH:mm"
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    ></DatePicker>
    );
  };

  export function DatePickerCustom() {
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
      isClearable
    />
  );
};

export function DatePickerCustomInput() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="example-custom-input btn btn-primary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      showTimeSelect
      locale="fr"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Heure"
      dateFormat="dd/MM/yyyy - HH:mm"></DatePicker>
  );
};

export function DatePickerHeader() {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export function DatePickerRange() {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};