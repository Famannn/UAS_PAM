import React from 'react'
import { View,Image, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Navigation from '../navigation/navigation'

export default function BerandaScreen({navigation}) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2d6dfc'}}>
            <View style={{flex:1.3}}>
                <Text style={styles.teksprofil}>OkeShip</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.teks1}>Departure Port</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih..."/> 
                </View>
                <Text style={styles.teks1}>Destination Port</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih..."/> 
                </View>
                <Text style={styles.teks1}>Service Class</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih..."/> 
                </View>
                <Text style={styles.teks1}>Date of Departure</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih..."/> 
                </View>
                <Text style={styles.teks1}>Hours of Departure</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih... "/> 
                </View>
            </View>
            <TouchableOpacity style = { styles.Btn } onPress={()=>navigation.navigate('DetailPesanan')}>
                <Text style = { styles.SubmitTeks }>Order</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginTop:40,
        borderRadius:20,
        borderWidth:2,
        textAlign:'center',
        textAlignVertical:'center'
    },
    form: {
        flex:5,
        width: "90%",
        backgroundColor:'#fcbc2d',
        flexDirection:'column',
        justifyContent: 'center',
        marginTop:30,
        marginBottom:50,
        borderRadius:20,
        borderColor:'#000',
        borderWidth:3
    },
    teks1: {
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginLeft:55,
    },
    inputView: {
        backgroundColor: "#fff",
        width: "70%",
        height: 45,
        marginBottom: 15,
        alignItems: "center",
        marginLeft:50,
        borderWidth:2,
        borderColor:'black',
        borderRadius:10
    },
    TextInput: {
        color: 'black',
        height: 50,
        width: "90%" ,
        flex: 1,
        padding: 10,
    },
    Btn: {
        width: 100,
        height: 35,
        marginTop:-35,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fcbc2d",
        borderRadius:10,
        borderWidth:0.5,
    },
    SubmitTeks: {
        color: "#000",
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'monospace',
    },
});