import React, {useEffect, useState} from 'react';
import Utils from '../../utils/index';
import {GRID_SIZE} from '../../constants/index';
import GridItem from './components/GridItem/GridItem';
import './Grid.css';


/**
 * Layout for grid with inputs
 */
const Grid = () => {
    const [list, setList] = useState([]);

    const handleItemChange = (item) => {
        const newList = list.slice();
        const index = newList.findIndex(i => i.id === item.id);
        newList.splice(index, 1, item);
        console.log(`Data updated: ${JSON.stringify(item)}`);
    };

    useEffect(() => {
        const addNewItem = () => {
            const newItem = {
                id: Utils.createId(),
                isDisabled: false,
                digit: 0
            };
            setList(stateList => [...stateList, newItem]);
        };
        const interval = setInterval(() => {
            addNewItem();
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid" style={{width: GRID_SIZE, height: GRID_SIZE}}>
            {list.map(item => <GridItem key={item.id} item={item} onChange={handleItemChange}/>)}
        </div>
    );
};

export default Grid;
