import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

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
    'Glisan Street',
    'Lombard Street',
    'Alberta Street',
    'Park Lane',
];

export function GuessForm() {
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const handleInputChange = (text: string) => {
        setQuery(text);
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
        setQuery(option);
        setFilteredOptions([]);
    };

    return (
        <View style={styles.container}>
            <Text>Guess the street name</Text>
            <Autocomplete
                data={filteredOptions}
                defaultValue={query}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    item: {
        padding: 10,
        fontSize: 16,
    },
    inputContainer: {
        borderWidth: 0,
    },
});