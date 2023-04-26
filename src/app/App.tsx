import React from 'react';
import style from './App.module.scss';
import SideBar from "../layouts/SideBar";
import CommonPage from "../pages/common-page/CommonPage";

function App() {
    return (
        <div className={style.container}>
            <SideBar/>
            <CommonPage/>
        </div>
    );
}

export default App;
