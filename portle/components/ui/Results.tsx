import {Text} from "react-native";

interface ResultsProps {
    message: string;

}

export default function Results({message, style}: ResultsProps) {
    return (
        <Text>{message}</Text>
    )
}