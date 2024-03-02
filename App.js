import React from 'react';
import { View } from 'react-native';
import Cronometro from './android/app/src/Cronometro'; 
import styles from './android/app/src/Styles/AppStyle';

const App = () => {
    return (
        <View style={styles.container}>            
            <Cronometro />
        </View>
    );
};

export default App;