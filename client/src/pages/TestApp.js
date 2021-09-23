import React, { Fragment, useState, useEffect, useReducer } from 'react';
import { DateDatePicker, DateTimePicker, DatePickerCustom, DatePickerCustomInput, DatePickerHeader, DatePickerRange } from '../components/DateTimePicker';
import axios from 'axios';

function TestApp() {
  return (
    <div className="container" >

      <form className="form-horizontal">
        <fieldset>
            <legend>Test</legend>
            <div className="form-group col-6 col-sm-4 col-md-3">
            <DateTimePicker onchange={(e) => { }}></DateTimePicker>
          </div>
          <div className="form-group col-2">
            <DateDatePicker onchange={(e) => { }}></DateDatePicker>
          </div>
          <div className="form-group col-2">
            <DatePickerCustom></DatePickerCustom>
          </div>
          <div className="form-group col-2">
            <DatePickerCustomInput></DatePickerCustomInput>
          </div>
          <div className="form-group col-2">
            <DatePickerHeader></DatePickerHeader>
          </div>
          <div className="form-group col-2">
            <DatePickerRange></DatePickerRange>
          </div>
          
            </fieldset>
          </form>
    </div>
  );
}
 
export default TestApp;