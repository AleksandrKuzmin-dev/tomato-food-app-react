import { useEffect } from 'react';

const useKeyListener = (keyCode, onKeyDown) => {

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
    }, [keyCode, onKeyDown]);
};

export default useKeyListener;
