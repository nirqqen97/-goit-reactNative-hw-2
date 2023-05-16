import React, { useState } from "react"
import { Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
const PhotoBG = require('../assets/PhotoBG.jpg');
const Rectangle22 = require('../assets/Rectangle22.jpg');
export const RegistrationForm = () => {
    const [isShown, setIsShown] = useState(false);
  
    const handleFocus = () => {
        if (!isShown) {
            setIsShown(true);
        }
    };
  
    return (
      <View style={styles.container}>
        <ImageBackground source={PhotoBG} style={styles.img}>
          <Image source={Rectangle22} style={styles.profilePic} />
          <View style={styles.border}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View style={styles.whiteBG}>
                <View style={{...styles.inputs, marginBottom : isShown ? 43 : 32}}>
                  <Text style={styles.registration}>Регистрация</Text>
                  <TextInput style={styles.input} placeholder="Логин" onFocus={handleFocus} />
                  <TextInput style={styles.input} placeholder="Адрес электронной почты" onFocus={handleFocus} />
                  <TextInput style={styles.input} placeholder="Пароль" onFocus={handleFocus} />
                </View>
                <View style = {styles.lowerPart}>
                <TouchableHighlight activeOpacity={0.6} onPress={() => alert('Pressed!')}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Зарегистрироваться</Text>
                  </View>
                </TouchableHighlight>
                <Text style={styles.ask}>Уже есть аккаунт? Войти</Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    );
  };
  


const styles = StyleSheet.create({
    lowerPart : {
        borderColor: "red",
        borderWidth: 1,
        marginVertical: 16,
        },
    inputs : { 
        borderColor: "red",
        borderWidth: 1,
        gap : 16,
        marginBottom : 32
    },
    border : {
        borderColor: "red",
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: 430,
        flex: 1,
        justifyContent: 'flex-end',
    },
    profilePic :{
        zIndex: 1,
        position : "absolute",
        top: '28%',
        left: '50%',
        transform: [{translateX: -50}, {translateY: -50}],
        borderRadius: 16,
    },
    whiteBG: {
        borderColor: "red",
        borderWidth: 1,
        paddingHorizontal: '8%',
        backgroundColor: '#fff',
        height: 600,
        zIndex: 0,
        borderRadius: '25px 25px 0px 0px',

    },
    registration : {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color : '#212121',
        marginTop : 92,
        marginBottom: 32,
    },
    input: {
        width : "100%",
        height: 50,
        borderColor: "#E8E8E8",
        borderWidth: 1,
        paddingHorizontal: 16,
        color: "#BDBDBD",
        backgroundColor : '#F6F6F6'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 25,
        height: 50,
        marginHorizontal: 16,
      },
      buttonText : {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,        
        textAlign: "center",
        color: "#FFFFFF"
      },
      ask : {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: "#1B4371",
      }
});
