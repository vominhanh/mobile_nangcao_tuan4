import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated, ImageBackground, Image } from 'react-native';
import { useRef } from 'react';

export default function App() {
  const app = useRef (new Animated.Value(0)).current
  const appIn=()=>{
      Animated.timing(app,{
        toValue:1,
        duration:1000,
        useNativeDriver:true,
      }).start();
  }
  const appOut=()=>{
    Animated.timing(app,{
      toValue:0,
      duration:1000,
      useNativeDriver:true,
    }).start();
}
  return (
    <View style={styles.container}>
      <View style ={{flexDirection:'row', justifyContent:'center', alignContent:'space-between'}}>
      <Animated.View style={[{opacity:app}, styles.styleAnimatedView]}>
              <Text style ={{color:"blue", fontSize: 24}}>Hello Nodejs</Text>
          </Animated.View> 
          <Animated.Image style={[{opacity:app}, {height:80, width:80, justifyContent:'center'}]} 
                source={require('./assets/2.jpg')}/>
      </View>
        
        <View style={{justifyContent:'space-between', flexBasis:100}}>
          <Button title='Vao' onPress={appIn}/>
          <Button title='Xuat' onPress={appOut}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleAnimatedView:{
    backgroundColor: 'pink',
    padding:30,

  },
  image: {
    
    justifyContent: 'center',
    height: 500,
    width: 500,
  },
});

