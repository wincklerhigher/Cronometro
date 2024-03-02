import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'; 
import moment from 'moment';
import styles from './Styles/CronometroStyle';

const Cronometro = () => {
const [tempoDecorrido, setTempoDecorrido] = useState(0);
const [iniciado, setIniciado] = useState(false);
const [ultimasContagens, setUltimasContagens] = useState([]);
const intervalRef = useRef(null);

useEffect(() => {
    if (iniciado) {
        intervalRef.current = setInterval(() => {
            setTempoDecorrido(prevTempo => prevTempo + 1);
        }, 1000);
    } else {
        clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
}, [iniciado]);

const iniciarOuPausarCronometro = () => {
    setIniciado(prevIniciado => !prevIniciado);
};

const zerarESalvarCronometro = () => {
    if (iniciado) {
        const novaContagem = moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');
        setUltimasContagens(prevContagens => {
            if (prevContagens.length === 5) {
                prevContagens.pop(); 
            }
            return [novaContagem, ...prevContagens];
        });
        clearInterval(intervalRef.current);
        setTempoDecorrido(0);
        setIniciado(false);
    } else if (tempoDecorrido > 0) {
        const novaContagem = moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');
        setUltimasContagens(prevContagens => {
            if (prevContagens.length === 5) {
                prevContagens.pop();
            }
            return [novaContagem, ...prevContagens];
        });
        setTempoDecorrido(0);
    }
};

const zerarContagens = () => {
    setUltimasContagens([]);
};

return (
    <View style={styles.container}>            
        <View style={styles.header}>
            <Image
                source={{ uri: 'https://i.imgur.com/dJf6yes.png' }}
                style={styles.logo}
                resizeMode="contain"
            />                
        </View>
        <Text style={styles.tempo}>
            {moment.utc(tempoDecorrido * 1000).format('HH:mm:ss')}
        </Text>
        <View style={styles.buttonContainer}>            
            <TouchableOpacity style={styles.button} onPress={iniciarOuPausarCronometro}>
                    <Text style={styles.buttonText}>{iniciado ? 'Pausar' : 'Iniciar'}</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={zerarESalvarCronometro}>
                <Text style={styles.buttonText}>Zerar e Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={zerarContagens}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
        {ultimasContagens.map((contagem, index) => (
            <Text key={index} style={styles.ultimaContagem}>
                Contagem {index + 1}: {contagem}
            </Text>
        ))}
    </View>
);
        };

export default Cronometro;