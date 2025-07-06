import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedView} from '@/components/ThemedView';
import {GuessForm} from "@/components/ui/GuessForm";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerTitle={<GreenSquaresTitle text="PORTLE" />}
      headerBackgroundColor={{ light: 'white', dark: 'black' }}
      headerImage={<Image
          style={styles.reactLogo}
          source={getImage()}/>}>
      <ThemedView style={styles.titleContainer}>
        <GuessForm />
      </ThemedView>
    </ParallaxScrollView>
  );
}

function GreenSquaresTitle({ text }: { text: string }) {
  return (
    <View style={styles.headerTitleOuter}>
      <View style={styles.headerTitleContainer}>
        {text.split('').map((char, idx) => (
          <View key={idx} style={styles.greenSquare}>
            <Text style={styles.letter}>{char}</Text>
          </View>
        ))}
      </View>
    </View>
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
  greenSquare: {
    width: 32,
    height: 32,
    backgroundColor: '#6aa965',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    borderRadius: 0,
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  headerTitleOuter: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});
