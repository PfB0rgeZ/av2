import * as React from 'react';
import { View, Text, Image, Button,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function homeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
     
      <Button
        title="agendamento"
        onPress={() => navigation.navigate('agendamento')}
      />
    </View>
  );
}
function agendamentoscreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
     <TextInput placeholder='Nome' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='endereço' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='data de nacimento' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='CPF' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <Button
        title="dados"
        onPress={() => navigation.navigate('dados')}
      />
    </View>
  );
}

function dadosscreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>





       
      

<Button
        title="continuar"
        onPress={() => navigation.navigate('home')}
      />

    </View>
  );
}








const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="agendamento" component={agendamentoscreen} />
        <Stack.Screen name="dados" component={dadosscreen} />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;  