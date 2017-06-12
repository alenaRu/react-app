import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import './Tab.scss';

const _onClickWrapper = (index, onClick) => () => {
    if (_.isFunction(onClick)) {
        onClick(index);
    }
};

const Tab = ({ selected, onClick, name, className, tabIndex }) => {
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

Tab.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    name: PropTypes.string,
    tabIndex: PropTypes.number,
    className: PropTypes.string
};

export default Tab;