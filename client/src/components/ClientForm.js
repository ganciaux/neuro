import React from "react"
import { useForm } from "react-hook-form"

export default function ClientForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register} />
      <input name="email" type="email" ref={register({ required: true })} />
      {errors.email && <span>Ce champs est requis</span>}
      <button type="submit">S'inscrire</button>
    </form>
  )
}