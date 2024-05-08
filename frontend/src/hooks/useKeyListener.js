import { useEffect } from 'react';

const useKeyListener = (keyCode, onKeyDown) => {
    console.log('render');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === keyCode) {
                onKeyDown();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};

export default useKeyListener;
