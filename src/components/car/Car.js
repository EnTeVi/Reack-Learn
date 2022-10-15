import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

import css from './Car.module.css';


const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    return (
        <div className={css.wrap}>
            <div>ID:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div className={css.but}>

                <button className={css.buttonCar} onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Update</button>
                <button className={css.buttonCar} onClick={()=> dispatch(carActions.deleteCar({id}))}>Delete</button>

            </div>
        </div>
    )
}

export {Car};