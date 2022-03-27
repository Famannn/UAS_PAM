import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native'

export default function PembatalanScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2d6dfc'}}>
            <View style={styles.tampilan}>
                <Text style={styles.teks1}>ORDER CANCELED!</Text>
                <Text style={styles.teks2}>Booking cancellation has been successful</Text>
            </View>
            <TouchableOpacity style = { styles.Btn1 } onPress={()=>navigation.navigate('Beranda')}>
                <Text style ={styles.teksBtn1}>OK</Text>
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
        borderRadius:20,
        borderWidth:2,
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
    teksBtn1: {
        color: "#000",
        fontSize:13,
        fontWeight:'bold',
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
        textAlign: 'center',
        textAlignVertical:'center',
    },
});