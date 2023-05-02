import React from 'react';
import style from './App.module.scss';
import SideBar from "../layouts/sidebar/SideBar";
import CommonPage from "../pages/CommonPage/CommonPage";
import {useAppSelector} from "./hooks";
import OwnershipForm from "../pages/OwnershipForm/OwnershipForm";

function App() {

    const step = useAppSelector(state => state.app.step)

    return (
        <div className={style.container}>
            <SideBar/>
            {step === 1 && <CommonPage/>}
            {step === 2 && <OwnershipForm/>}
        </div>
    );
}

export default App;
