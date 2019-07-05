import React from 'react';

import './index.scss';

const Sequence = ({fibNum}) => {
    const items = fibNum.map((num, n) => <li key={n} className={'num'}>{num}</li>)

    return (
        <div id={'sequence'}>
            <h4 id={'numTableHeading'}>First {fibNum.length} Fibonacci numbers</h4>

            <div id='numTable'>
                <ul id={'numList'}>
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default Sequence;
