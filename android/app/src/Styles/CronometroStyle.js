import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 250, 
    },
    tempo: {
        fontSize: 35,
        marginBottom: 20,
    },
    ultimaContagem: {
        fontSize: 20,
        marginTop: 20, 
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20, 
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 11, 
        paddingHorizontal: 14,
        marginHorizontal: 5, 
        borderRadius: 5,
        flexGrow: 1, 
        maxWidth: (width - 20 - 20 - 5 * 3) / 4, 
    },
    buttonText: {
        color: 'white',
        fontSize: 17,     
        fontWeight: 'bold',    
        textAlign: 'center', 
    },
    logo: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        marginBottom: 100, 
    },
});

export default styles;