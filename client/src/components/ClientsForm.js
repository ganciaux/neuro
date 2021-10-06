import { useForm } from "react-hook-form"
import Loader from "react-loader-spinner"

export const ClientsForm = ({ defaultValues, onFormSubmit, isLoading }) => {
    const { register, handleSubmit, isSubmitting } = useForm({ defaultValues })
    
    const onSubmit = handleSubmit((data) => {
        //onFormSubmit(data)
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit}>
            <input name="name" {...register('name')} />
            <input name="firstname" {...register('firstname')} />
            <input name="email" {...register('email')} />
            <input name="phone" {...register('phone')} />
            <input name="address" {...register('address')} />
            <input name="city" {...register('city')} />
            <input name="zip" {...register('zip')} />
            <input name="comment" {...register('comment')} />
            <input name="typeId" {...register('typeId')} value="6143a2429faaa824975369dc" />
            <button disabled={isSubmitting} type="submit">
                {isLoading ? <Loader type="ThreeDots" color="#fff"/> : "S'inscrire" }
            </button>
        </form>
    );
}