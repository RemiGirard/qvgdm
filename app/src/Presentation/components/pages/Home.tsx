import {Image, StyleSheet, View} from "react-native";
import Score from "@/Presentation/components/organisms/Score";

export default () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/Presentation/assets/logo.png')} style={styles.image}/>
      <Score/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});