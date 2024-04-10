import {StyleSheet, Text, View} from "react-native";
import Colors from "@/Presentation/Colors";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Score</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: Colors.main,
  },
  text: {
    color: Colors.secondary,
  }
});
