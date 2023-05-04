import {ActivityType, setOwnership} from "../store/reducers/appSlice";
import {useAppDispatch} from "../app/hooks";

export const useSetOwnerShip = () => {
    const dispatch = useAppDispatch()
    const setOwnerShip = (activity: ActivityType) => dispatch(setOwnership({activity}))
    return {setOwnerShip}
}