import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Quiz() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [isCalculating, setIsCalculating] = useState(false);

    // Scoring for all 5 Faculties
    const [scores, setScores] = useState({
        FICT: 0,
        FBIT: 0,
        FCM: 0,
        FCDM: 0,
        FABE: 0
    });

    const questions = [
        { q: "Do you enjoy coding and solving complex logical puzzles?", cat: "FICT" },
        { q: "Are you interested in global business and financial markets?", cat: "FBIT" },
        { q: "Do you love digital art, animation, and 3D modeling?", cat: "FCM" },
        { q: "Are you interested in journalism, TV, and public speaking?", cat: "FCDM" },
        { q: "Do you like designing buildings and urban environments?", cat: "FABE" },
    ];

    const handleAnswer = (points) => {
        const category = questions[currentStep].cat;

        if (points > 0) {
            setScores(prev => ({...prev, [category]: prev[category] + points }));
        }

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // QUIZ FINISHED - Start automatic transition
            setIsCalculating(true);
        }
    };

    // This effect watches for when isCalculating becomes true
    useEffect(() => {
        if (isCalculating) {
            const timer = setTimeout(() => {
                autoNavigate();
            }, 1500); // 1.5 second delay for "calculating" feel
            return () => clearTimeout(timer);
        }
    }, [isCalculating]);

    const autoNavigate = () => {
        // Determine winner
        const winner = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

        // Map Faculty to a specific Recommended Course
        const results = {
            FICT: { id: "se", name: "BSc (Hons) in Software Engineering", desc: "The perfect fit for your logical mind." },
            FBIT: { id: "bus", name: "BA (Hons) in Business Management", desc: "The perfect fit for a future CEO." },
            FCM: { id: "gd", name: "BA (Hons) in Graphic Design", desc: "The perfect fit for your creative spirit." },
            FCDM: { id: "jour", name: "BA (Hons) in Journalism", desc: "The perfect fit for a media professional." },
            FABE: { id: "arch", name: "BSc (Hons) in Architecture", desc: "The perfect fit for a future architect." },
        };

        const match = results[winner];

        // AUTOMATIC REDIRECT
        router.replace({
            pathname: `/course/${match.id}`,
            params: { name: match.name, desc: match.desc }
        });
    };

    if (isCalculating) {
        return ( <
            View style = { styles.loadingContainer } >
            <
            ActivityIndicator size = "large"
            color = "#FFD700" / >
            <
            Text style = { styles.loadingText } > Analyzing your interests... < /Text> <
            Text style = { styles.subLoading } > Finding your perfect Limkokwing career... < /Text> <
            /View>
        );
    }

    return ( <
        View style = { styles.container } >
        <
        View style = { styles.header } >
        <
        Text style = { styles.progressText } > Question { currentStep + 1 }
        of 5 < /Text> <
        View style = { styles.progressTrack } >
        <
        View style = {
            [styles.progressFill, { width: `${((currentStep + 1) / 5) * 100}%` }] }
        /> <
        /View> <
        /View>

        <
        View style = { styles.card } >
        <
        Text style = { styles.questionText } > { questions[currentStep].q } < /Text>

        <
        TouchableOpacity style = { styles.btnYes }
        onPress = {
            () => handleAnswer(1) } >
        <
        Text style = { styles.btnText } > YES, I LOVE THIS < /Text> <
        /TouchableOpacity>

        <
        TouchableOpacity style = { styles.btnNo }
        onPress = {
            () => handleAnswer(0) } >
        <
        Text style = { styles.btnNoText } > NO, NOT FOR ME < /Text> <
        /TouchableOpacity> <
        /View> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, backgroundColor: '#fff', justifyContent: 'center' },
    header: { marginBottom: 30 },
    progressText: { fontSize: 14, color: '#888', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    progressTrack: { height: 6, backgroundColor: '#eee', borderRadius: 3 },
    progressFill: { height: 6, backgroundColor: '#FFD700', borderRadius: 3 },
    card: { backgroundColor: '#000', padding: 35, borderRadius: 25, alignItems: 'center' },
    questionText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 35, color: '#fff', lineHeight: 28 },
    btnYes: { backgroundColor: '#FFD700', padding: 18, borderRadius: 12, width: '100%', marginBottom: 15 },
    btnNo: { backgroundColor: 'transparent', padding: 18, borderRadius: 12, width: '100%', borderWidth: 1, borderColor: '#FFD700' },
    btnText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
    btnNoText: { color: '#FFD700', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
    loadingContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
    loadingText: { color: '#FFD700', fontSize: 20, fontWeight: 'bold', marginTop: 20 },
    subLoading: { color: '#fff', fontSize: 14, marginTop: 10, opacity: 0.7 }
});