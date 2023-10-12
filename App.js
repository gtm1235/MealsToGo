import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ?  StatusBar.currentHeight  : 0,  }}>
        <View style={{ padding: 16, backgroundColor: 'green',}}>
          <Text >Our react native blank canvas</Text>
        </View>
        <View style={{ padding: 16, backgroundColor: 'blue', flex: 1,  }}>
          <Text >Our react native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({

},
);
