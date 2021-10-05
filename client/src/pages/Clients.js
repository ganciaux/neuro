import React from 'react';
import { useForm, Controller } from "react-hook-form"
import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
});

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

function Clients() {
  const { register, handleSubmit, formState, setError, control } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })
  const { isSubmitting, isSubmitted, isSubmitSuccessful, errors } = formState;
  const onSubmit = async (data) => {
    await wait(2000);
    console.log(data);
    /*setError('username', {
      type: 'manual',
      message: "erreur serveur"
    })*/
  }

  if (isSubmitSuccessful) {
    console.log('redirect')  
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && <div className="alert alert-success">Merci pour l'inscription</div>}
      <input name="username" {...register('username')} />
      {errors.username && <span>{ errors.username.message}</span>}
      <input name="email" {...register('email')} />
      {formState.errors.email && <span>{ errors.email.message}</span>}
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            onBlur={onBlur}
            onChange={onChange}
            selected={value}
          />
        )}
        name="birthday"
      />
      <button disabled={ isSubmitting } type="submit">S'inscrire</button>
    </form>
  );
}

export default Clients;