import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";
import { MaterialIcons } from "@expo/vector-icons";

export default function CourseDetail() {
    const { name, desc, img, videoId } = useLocalSearchParams();
    const [rating, setRating] = useState(0);

    return ( <
        ScrollView style = { styles.container } >
        <
        Image source = {
            { uri: img } }
        style = { styles.headerImg }
        />

        <
        View style = { styles.content } >
        <
        Text style = { styles.title } > { name } < /Text> <
        Text style = { styles.descText } > { desc } < /Text>

        <
        Text style = { styles.label } > Watch Course Insight: < /Text>

        <
        View style = { styles.videoBox } >
        <
        YoutubePlayer height = { 220 }
        videoId = { videoId }
        play = { false }
        /> <
        /View>

        <
        View style = { styles.ratingSection } >
        <
        Text style = { styles.ratingLabel } > Rate this Course(0 - 6): < /Text> <
        View style = { styles.stars } > {
            [1, 2, 3, 4, 5, 6].map((i) => ( <
                TouchableOpacity key = { i }
                onPress = {
                    () => setRating(i) } >
                <
                MaterialIcons name = { i <= rating ? "star" : "star-border" }
                size = { 35 }
                color = "#FFD700" /
                >
                <
                /TouchableOpacity>
            ))
        } <
        /View> <
        Text style = { styles.scoreText } > { rating }
        / 6</Text >
        <
        /View> <
        /View> <
        /ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerImg: {
        width: '100%',
        height: 220
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    descText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        marginBottom: 25
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000'
    },
    videoBox: {
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#000',
        marginBottom: 25
    },
    ratingSection: {
        backgroundColor: '#000',
        padding: 25,
        borderRadius: 20,
        alignItems: 'center'
    },
    ratingLabel: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10
    },
    stars: {
        flexDirection: 'row',
        marginBottom: 10
    },
    scoreText: {
        color: '#FFD700',
        fontSize: 28,
        fontWeight: 'bold'
    }
});