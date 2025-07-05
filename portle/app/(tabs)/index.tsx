import {Image} from 'expo-image';
import {StyleSheet, View} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedView} from '@/components/ThemedView';
import {GuessForm} from "@/components/ui/GuessForm";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'black' }}
      headerImage={<Image
          style={styles.reactLogo}
          source={getImage()}/>}
    >
      <ThemedView style={styles.titleContainer}>
        <GuessForm />
      </ThemedView>
    </ParallaxScrollView>
  );
}

function getImage() {
    return images.glisan
}

const images = {
    glisan: require('@/assets/images/portland_Glisan.png')
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
