import React, {useRef} from 'react';
import Grid from '../../components/Grid/Grid';
import Ruler from '../../components/Ruler/Ruler';
import useScroll from '../../hooks/useScroll';
import './AppContainer.css';

function AppContainer() {
    const containerRef = useRef();
    const {scrollY, scrollX} = useScroll({ref: containerRef});

    return (
        <div className="container" ref={containerRef}>
            <Ruler scrollX={scrollX} scrollY={scrollY}/>
            <Grid/>
        </div>
    );
}

export default AppContainer;
