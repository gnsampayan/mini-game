import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const ScreenDimensionsContext = createContext<{ width: number; height: number }>({ width: 0, height: 0 });

export const ScreenDimensionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dimensions, setDimensions] = useState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });
    useEffect(() => {
        const onChange = ({ window }: { window: { width: number; height: number } }) => {
            setDimensions({ width: window.width, height: window.height });
        };
        const subscription = Dimensions.addEventListener('change', onChange);
        return () => subscription.remove();
    }, []);

    return (
        <ScreenDimensionsContext.Provider value={dimensions}>
            {children}
        </ScreenDimensionsContext.Provider>
    );
};

export const useScreenDimensions = () => useContext(ScreenDimensionsContext);
