

import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

// Function to load custom fonts
async function loadCustomFonts() {
    try {
        await Font.loadAsync({
            // 'Inter': require('./assets/Inter/static/Inter-Light.ttf'),
            'Inter' : require('../../assets/Inter/static/Inter-Light.ttf'),
            'Inter-Bold': require('../../assets/Inter/static/Inter-Bold.ttf'),
            'Briem_Hand': require('../../assets/Briem_Hand,Inter/Briem_Hand/static/BriemHand-Bold.ttf')
        });
    } catch (error) {
        console.error('Error loading fonts:', error);
        throw new Error('Failed to load fonts');
    }
}

export default function FontsFam({ children }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await loadCustomFonts();
                setFontsLoaded(true);
            } catch (error) {
                // Handle the error, e.g., show an error message
            }
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return children;
}
