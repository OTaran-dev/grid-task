import React from 'react';
import PropTypes from 'prop-types';
import {GRID_SIZE, RULER_STEP} from '../../constants/index';
import './Ruler.css';


/**
 * Component for vertical & horizontal page ruler
 */
const Ruler = ({scrollX, scrollY}) => {
    const count = Math.trunc(GRID_SIZE / RULER_STEP);

    return (
        <div className="ruler">
            <div className="ruler__horizontal">
                {Array.from(new Array(count)).map((item, index) =>
                    <div key={index} className="ruler__line" style={{left: scrollX + index * RULER_STEP}}>
                        <span className="ruler__line__number">{index * RULER_STEP}</span>
                    </div>
                )}
            </div>
            <div className="ruler__vertical">
                {Array.from(new Array(count)).map((item, index) =>
                    <div key={index} className="ruler__line" style={{top: -scrollY + index * RULER_STEP}}>
                        <span className="ruler__line__number">{index * RULER_STEP}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

Ruler.propTypes = {
    scrollX: PropTypes.number,
    scrollY: PropTypes.number
};

export default Ruler;
