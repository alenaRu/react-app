import * as React from 'react';
import * as _ from 'lodash';
import './Tab.scss';

export interface TabProps {
    selected: boolean,
    onClick: (tabIndex: number) => void,
    name: string,
    tabIndex: number,
    className?: string
}

const Tab = (props: TabProps) => {
    const { selected, onClick, name, className, tabIndex } = props;

    let clsWrapper = 'tab ';

    if (!_.isUndefined(className)) {
        clsWrapper += `${className} `;
    }

    if (selected) {
        clsWrapper += 'selected';
    }

    return (
        <div
            className={clsWrapper}
            onClick={_onClickWrapper(tabIndex, onClick)}>
            {name}
        </div>
    );

}

const _onClickWrapper = (index: number, onClick: (tabIndex: number) => void) => () => {
    if (_.isFunction(onClick)) {
        onClick(index);
    }
};

export default Tab;