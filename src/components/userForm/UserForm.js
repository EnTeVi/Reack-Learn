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
            <input className='boxInput' type="text" placeholder='your comment' {...register('comment', {require: {value: true, message: 'Error'}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }

            <button className='button'>Yes</button>
        </form>
    )
}

export {UserForm};