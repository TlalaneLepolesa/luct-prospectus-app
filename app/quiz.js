import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CareerQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ tech: 0, creative: 0, business: 0 });

  const questions = [
    { q: "Do you enjoy building things with code or logic?", cat: "tech" },
    { q: "Do you prefer drawing and designing over writing reports?", cat: "creative" },
    { q: "Are you interested in leading teams and managing people?", cat: "business" },
    { q: "Do you enjoy video editing and social media storytelling?", cat: "creative" },
    { q: "Do you like figuring out how networks and computers work?", cat: "tech" }
  ];

  const handleAnswer = (val) => {
    const category = questions[step].cat;
    const newScores = { ...scores };
    if (val === 1) newScores[category] += 1;
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
   // ... in app/quiz.js
} else {
  let targetFaculty = "FBIT"; 
  if (newScores.tech >= newScores.creative) targetFaculty = "FICT";
  else if (newScores.creative >= newScores.business) targetFaculty = "FCM";
  
  router.replace(`/faculty/${targetFaculty}`);
}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>Question {step + 1} / 5</Text>
      <View style={styles.card}>
        <Text style={styles.questionText}>{questions[step].q}</Text>
        <TouchableOpacity style={styles.btnYes} onPress={() => handleAnswer(1)}>
          <Text style={styles.btnText}>Yes, definitely!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNo} onPress={() => handleAnswer(0)}>
          <Text style={styles.btnText}>Not really</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
  progressText: { color: '#FFD700', fontSize: 16, textAlign: 'center', marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 20, alignItems: 'center' },
  questionText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  btnYes: { backgroundColor: '#FFD700', width: '100%', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
  btnNo: { backgroundColor: '#eee', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { fontWeight: 'bold', color: '#000' }
});