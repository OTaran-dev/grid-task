import {useEffect, useState} from 'react';

/**
 * Hook to handle scroll
 * @param ref
 */
function useScroll({ref}) {
    const [scrollY, setScrollY] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    const handleScroll = (e) => {
        setScrollY(e.currentTarget.scrollTop);
        setScrollX(-e.currentTarget.scrollLeft);
    };

    useEffect(() => {
        const node = ref.current;
        node.addEventListener('scroll', handleScroll);
        return () => {
            if (node) node.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return {scrollY, scrollX};
}

export default useScroll;
