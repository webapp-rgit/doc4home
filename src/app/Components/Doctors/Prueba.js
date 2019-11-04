import React, { useState } from 'react';
import {
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

function Prueba() {
    const [triggeredSimpleItemAction, triggerSimpleItemAction] = useState('');
    const [triggeredComplexItemAction, triggerComplexItemAction] = useState('');

    const swipeRightDataSimple = name => ({
        content: (
            <div className="contentLeft">
                <span>Left content</span>
            </div>
        ),
        action: () => triggerSimpleItemAction(`Swipe right action on "${name}"`)
    });
    const swipeLeftDataSimple = name => ({
        content: (
            <div className="contentRight">
                <span>Right content</span>
            </div>
        ),
        action: () => triggerSimpleItemAction(`Swipe left action on "${name}"`)
    });

    const itemContentSimple = name => (
        <div className="listItem">
            <span>{name}</span>
        </div>
    );

    return (
        <div className="example">
            <span className="actionInfo">{triggeredSimpleItemAction}</span>
            <div className="listContainer">
                <SwipeableList>
                    <SwipeableListItem
                        swipeRight={swipeRightDataSimple('Item with both swipes')}
                        swipeLeft={swipeLeftDataSimple('Item with both swipes')}
                    >
                        {itemContentSimple('Item with swipe right')}
                    </SwipeableListItem>
                </SwipeableList>
            </div>
        </div>
    );
}

export default Prueba;