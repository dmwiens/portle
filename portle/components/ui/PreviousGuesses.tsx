import {StyleSheet, Text, View} from "react-native";

interface Props {
    guesses: string[];
}

export default function PreviousGuesses({
    guesses,
}: Props) {
    return (
        <View>
            {guesses.map((guess, index) => (
                <Text key={index}>
                    {guess}
                </Text>
            ))}
        </View>
    )
}