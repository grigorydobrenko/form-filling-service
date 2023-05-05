import React from 'react';
import style from './App.module.scss';
import SideBar from "../layouts/sidebar/SideBar";
import CommonPage from "../pages/CommonPage/CommonPage";
import {useAppSelector} from "./hooks";
import OwnershipPage from "../pages/OnwershipPage/OwnershipPage";
import EntrepreneurPage from "../pages/OnwershipPage/EntrepreneurPage/EntrepreneurPage";
import LLCPage from "../pages/OnwershipPage/LLCPage/LLCPage";
import AddressPage from "../pages/AddressPage/AddressPage";
import SocialsPage from "../pages/SocialsPage/SocialsPage";

function App(): JSX.Element {

    const step = useAppSelector(state => state.app.step)
    const activity = useAppSelector(state => state.app.activity)

    return (
        <div className={style.container}>
            <SideBar/>
            {step === 1 && <CommonPage/>}
            {step === 2 && <OwnershipPage/>}
            {step === 2.1 && activity === "entrepreneur" && <EntrepreneurPage/>}
            {step === 2.1 && activity === "LLC" && <LLCPage/>}
            {step === 3 &&  <AddressPage isLivingAddress={false}/>}
            {step === 4 &&  <AddressPage isLivingAddress={true}/>}
            {step === 5 &&  <SocialsPage/>}
        </div>
    );
}

export default App;
