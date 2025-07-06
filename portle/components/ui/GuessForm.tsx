import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import PreviousGuesses from "@/components/ui/PreviousGuesses";
import Results from "@/components/ui/Results";

const CORRECT_ANSWER = "Glisan Street";
const MAX_GUESSES = 5;

const options = [
    'Main Street',
    'Broadway',
    'Elm Street',
    'Maple Avenue',
    'Oak Street',
    'Pine Street',
    'Cedar Avenue',
    '2nd Avenue',
    '33rd Avenue',
    'I-84',
    'Lombard Street',
    'Alberta Street',
    'Park Lane',
].concat(CORRECT_ANSWER).sort();

export function GuessForm() {
    const [currentGuess, setCurrentGuess] = useState('');
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [results, setResults] = useState<string>();
    const [isGameOver, setIsGameOver] = useState(false);

    const handleInputChange = (text: string) => {
        setCurrentGuess(text);
        if (text) {
            const results = options.filter(option =>
                option.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredOptions(results);
        } else {
            setFilteredOptions([]);
        }
    };

    const handleSelect = (option: string) => {
        setCurrentGuess(option);
        setFilteredOptions([]);
    };

    const handleGuessSubmission = () => {
        if (isCorrectGuess(currentGuess)) {
            setIsGameOver(true)
            setResults('Success! You guessed the correct street name')
        } else if (previousGuesses.length < MAX_GUESSES) {
            if (previousGuesses.includes(currentGuess)) {
                return
            }
            setPreviousGuesses(prevGuesses => {
                return [...prevGuesses, currentGuess]
            })
        } else {
            setIsGameOver(true)
            setResults('Game Over! You have reached the maximum number of guesses')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Guess the street name</Text>
            <Autocomplete
                data={filteredOptions}
                defaultValue={currentGuess}
                onChangeText={handleInputChange}
                placeholder="Enter a street name"
                flatListProps={{
                    keyExtractor: (_, idx) => idx.toString(),
                    renderItem: ({item}) => (
                        <TouchableOpacity onPress={() => handleSelect(item)}>
                            <Text style={styles.item}>{item}</Text>
                        </TouchableOpacity>
                    ),
                }}
                inputContainerStyle={styles.inputContainer}
                keyboardShouldPersistTaps='always'
            />
            <Button disabled={isGameOver} title={'check'} onPress={() => handleGuessSubmission()} />
            <PreviousGuesses guesses={previousGuesses} />
            <Results message={results}/>
        </View>
    );
}

function isCorrectGuess(guess: string) {
    return guess.toLowerCase() === CORRECT_ANSWER.toLowerCase();
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
        alignItems: 'stretch',
    },
    item: {
        padding: 10,
        fontSize: 16,
    },
    inputContainer: {
        borderWidth: 0,
    },
});