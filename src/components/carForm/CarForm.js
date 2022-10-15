import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

import css from './CarForm.module.css';


const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();

    const {carForUpdate, errors} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.create({car: data}))
        }
        reset();
    };

    return (
        <form className={css.headerForm} onSubmit={handleSubmit(submit)}>
            <div className={css.inputForm}>

                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>

            </div>

            <div className={css.but}>

                <button>{carForUpdate ? 'Update' : 'Create'}</button>

            </div>
            {errors && <div>{JSON.stringify(errors)}</div>}
        </form>
    )
}
export {CarForm};