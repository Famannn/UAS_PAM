import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function PesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#2d6dfc'}}>
            <Text style={styles.teksprofil}>Travel History</Text>
            <View style={styles.profil1}>
                <Text style={styles.profil2}>
                    <Text style={styles.teks1}>Merak    -   Bakauheni</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    teksprofil: {
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        textAlign:'center',
        width: 300,
        height: 50,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection:'column',
        marginTop:10,
        borderRadius:20,
        borderWidth:2,
        textAlign:'center',
        textAlignVertical:'center'
    },
    profil1: {
        width: 300,
        height: 450,
        backgroundColor:'#fcbc2d',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:50,
        marginTop:60,
        borderRadius:20,
        borderWidth:2,
    },
    profil2: {
        width: 280,
        height: 50,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:50,
        marginTop:10,
        borderRadius:20,
        borderWidth:2,
        textAlign:'center',
        textAlignVertical:'center'
    },
    teks1:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:25,
        marginTop:15,
        textAlign:'center'
    },
});