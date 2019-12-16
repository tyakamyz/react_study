import React from 'react';
import myScssMod from './assets/scss/style.module.scss';

const MyScssModule = () => {
    
    return (
        <div>
            <h2>MyScssModule</h2>

            <div className={myScssMod.myScss}>
                <div className={[myScssMod.myScssBox, myScssMod.red].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.green].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.orange].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.pink].join(' ')} />
            </div>
            
            <hr />
        </div>
    );
};

export default MyScssModule;