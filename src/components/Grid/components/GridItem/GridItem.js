import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

/**
 * One block with inputs
 */
const GridItem = ({item, onChange}) => {
    const [data, setData] = useState(item);
    const [isUpdated, toggleUpdated] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setData({...data, [id]: value});
        toggleUpdated(true);
    };

    return (
        <div key={item.id} className="grid__block">
            <div className="grid__block__data">
                <input
                    type="checkbox"
                    className="check"
                    value={data.isDisabled}
                    onChange={() => {
                        setData({...data, isDisabled: !data.isDisabled});
                        toggleUpdated(true);
                    }}/>
                <input
                    id="digit"
                    className="field"
                    type="number"
                    disabled={data.isDisabled}
                    value={data.digit}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                    }}
                    onChange={handleChange}
                />
            </div>
            {isUpdated ?
                <button
                    className="btn"
                    onClick={() => {
                        onChange(data);
                        toggleUpdated(false);
                    }}>Save</button>
                : null}
        </div>
    );
};

GridItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
        digit: PropTypes.number,
    }),
    onChange: PropTypes.func
};

export default GridItem;
