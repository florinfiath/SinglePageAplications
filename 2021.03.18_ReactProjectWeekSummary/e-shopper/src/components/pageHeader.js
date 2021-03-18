import React from 'react';
import BarTop from './headerBars/barTop';
import BarMiddle from './headerBars/barMiddle'
import BarBottom from './headerBars/barBottom'

const PageHeader = () => {
    return (
        <div>
            <header id="header">
                <BarTop/>
                <BarMiddle/>
                <BarBottom/>
            </header>
        </div>
    );
};

export default PageHeader;