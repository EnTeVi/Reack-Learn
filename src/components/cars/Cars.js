import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

import {Car} from "../car/Car";
import css from './Cars.module.css';


const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    },[])

    return (
        <div className={css.container}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}
export {Cars};