import {userService} from "../../services";
import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'all'
    });

    const submit = (obj) => {
        userService.createUser(obj).then(({data}) => setUsers(users => [...users, data]))
    }

    return (
        <form className='containetForm' onSubmit={handleSubmit(submit)}>
            <input className='boxInput' type="text" placeholder='name' {...register('name', {require: {value: true, message: 'Error'}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <input className='boxInput' type="text" placeholder='surname' {...register('surname')}/>
            <input className='boxInput' type="text" placeholder='email' {...register('email')}/>
            <button className='button'>Click</button>
        </form>
    )
}

export {UserForm};