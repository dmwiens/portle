import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import {GuessForm} from "@/components/ui/GuessForm";

export default function HomeScreen() {
  return (
      <View style={styles.window}>
        <ThemedView style={styles.headerTitleContainer}>
          <GreenSquaresTitle text="PORTLE" />
        </ThemedView>
        <View style={styles.mapContainer}>
          <Image style={styles.mapImage}
              source={getImage()}/>
        </View>
        <ThemedView style={styles.titleContainer}>
          <GuessForm />
        </ThemedView>
      </View>
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
  mapContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '7.5%',
  },
  mapImage: {
    width: '85%',
    aspectRatio: 1,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
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
  window: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  }
});
