import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native'; // View é a mesma coisa que div no html

import api from './services/api';

// Não possuem valor semântico (significado)

// Não possuem estilização própria
// Todos os componentes possuem por padrão "display flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App()
{
    const [projects, setProjects] = useState([]);

    useEffect (() => {// Dispara a função quando as variáveis mudarem
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(reponse.data);
        });
    }, []); 
    
    return (
        <> 
            <StatusBar barStyle = "light-content" backgroundColor = '#7159C1'/>
            <View style = {styles.container}> 
                <Text style = {styles.title}>Hello GoStack</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159C1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }
});