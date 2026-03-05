import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

export default function CourseDetail() {
    const { id } = useLocalSearchParams();
    const [rating, setRating] = useState(0);

    const handleRate = () => {
        if (rating < 6) setRating(rating + 1);
    };

    return ( <
        ScrollView style = { styles.container } >
        <
        Image source = {
            { uri: "https://via.placeholder.com/400x200" } }
        style = { styles.image }
        /> <
        View style = { styles.content } >
        <
        Text style = { styles.title } > Course ID: { id } < /Text> <
        Text style = { styles.desc } > This is a premium Limkokwing University course designed
        for industry excellence. < /Text>

        <
        Text style = { styles.label } > Course Video: < /Text> <
        Video source = {
            { uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" } }
        useNativeControls resizeMode = "contain"
        style = { styles.video }
        />

        <
        View style = { styles.ratingBox } >
        <
        Text style = { styles.ratingText } > Course Rating: { rating }
        / 6</Text >
        <
        View style = { styles.stars } > {
            [1, 2, 3, 4, 5, 6].map((i) => ( <
                MaterialIcons key = { i }
                name = { i <= rating ? "star" : "star-border" }
                size = { 35 }
                color = "#FFD700" /
                >
            ))
        } <
        /View> <
        TouchableOpacity style = { styles.button }
        onPress = { handleRate } >
        <
        Text style = { styles.buttonText } > TAP TO RATE < /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        /ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    image: { width: '100%', height: 200 },
    content: { padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#8B0000' },
    desc: { fontSize: 16, marginVertical: 10, color: '#666' },
    label: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
    video: { width: '100%', height: 200, marginTop: 10, borderRadius: 10 },
    ratingBox: { marginTop: 30, alignItems: 'center', backgroundColor: '#f9f9f9', padding: 20, borderRadius: 15 },
    ratingText: { fontSize: 20, fontWeight: 'bold' },
    stars: { flexDirection: 'row', marginVertical: 10 },
    button: { backgroundColor: '#8B0000', padding: 15, borderRadius: 10, width: '100%' },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});