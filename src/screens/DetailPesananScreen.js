import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default function DetailPesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2d6dfc'}}>
            <View style={styles.tampilan}>
                <Text style={styles.teks1}>SUCCESSFUL PAYMENT!</Text>
                <Text style={styles.teks2}>THANK YOU FOR USING OUR SERVICES</Text>
            </View>
            <TouchableOpacity style = { styles.Btn1 } onPress={()=>navigation.navigate('Beranda')}>
                <Text style ={styles.teksBtn1}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.Btn2 } onPress={()=>navigation.navigate('Pembatalan')}>
                <Text style ={styles.teksBtn2}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    tampilan: {
        width: 250,
        height: 100,
        backgroundColor:'#fcbc2d',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:50,
        marginTop:100,
        borderRadius:20,
        borderWidth:2,
    },
    teks1: {
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical:'center',
        marginTop:30,
        color:'#000'
    },
    teks2: {
        fontSize:10,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        textAlignVertical:'center',
    },
    Btn1: {
        width: 130,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        marginTop:50,
        borderRadius:10
    },
    Btn2: {
        width: 130,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bf1d1d",
        marginTop:10,
        borderRadius:10
    },
    teksBtn1: {
        color: "#000",
        fontSize:13,
        fontWeight:'bold',
    },
    teksBtn2: {
        color: "#FFFFFF",
        fontSize:13,
        fontWeight:'bold',
    },
});