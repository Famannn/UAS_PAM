import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function LainnyaScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2d6dfc'}}>
            <View style={styles.profil}>
                <Text style={styles.teks1}>Acount</Text>
                <Text style={styles.teks2}>Name     : M. Fathurrachman S</Text>
                <Text style={styles.teks2}>NIM              : 119140059</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profil: {
        width: 250,
        height: 150,
        backgroundColor:'#fcbc2d',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:50,
        marginTop:60,
        borderRadius:20,
        borderWidth:2,
    },
    teks1:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:25,
        marginTop:15,
    },
    teks2:{
        fontSize:15,
        color:'black',
        marginBottom:5,
    }
});