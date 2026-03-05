import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const facultyData = {
  FICT: [
    { 
      id: "se", name: "Software Engineering", 
      videoId: "AlqTPomaSLA", // Added Video ID
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", // Added Image
      about: "Architect the digital world by building reliable and efficient systems.", 
      requirements: "LGCSE: Credit in Maths, English, and 2 Science subjects." 
    },
    { 
      id: "it", name: "Information Technology", 
      videoId: "XZrckLYqdys", 
      img: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      about: "Master the systems that keep the modern world connected.", 
      requirements: "LGCSE: Pass in Maths, English, and 3 other subjects." 
    }
  ],
  FBIT: [
    { 
      id: "hrm", name: "HR Management", 
      videoId: "bMItqoVyQFE", 
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      about: "Empower the heartbeat of every organization: its people.", 
      requirements: "LGCSE: Credit in English, Pass in Maths." 
    },
    { 
      id: "bm", name: "Business Management", 
      videoId: "a-uPznyA7Hw", 
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      about: "Lead the next generation of global enterprises.", 
      requirements: "LGCSE: Pass in English, Maths, and 3 others." 
    }
  ],
  FCDM: [
    { 
      id: "pr", name: "Public Relations", 
      videoId: "VejDCJ9_wuk", 
      img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      about: "Shape the narratives that define global brands.", 
      requirements: "LGCSE: Credit in English and 4 other subjects." 
    }
  ],
  FCM: [
    { 
      id: "gd", name: "Graphic Design", 
      videoId: "https://www.facebook.com/LimkokwingLesotho/videos/926417236407611/", 
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      about: "Turn imagination into visual reality.", 
      requirements: "LGCSE: Pass in English and Portfolio Submission." 
    }
  ],
  FABE: [
    { 
      id: "arch", name: "Architecture", 
      videoId: "https://www.facebook.com/reel/1924425818467377/", 
      img: "https://images.pexels.com/photos/434645/pexels-photo-434645.jpeg",
      about: "Design the spaces where humanity lives and works.", 
      requirements: "LGCSE: Credit in Maths and Physics." 
    }
  ]
};

export default function FacultyDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const courses = facultyData[id] || [];

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/images/grad_bg.jpg')} 
        style={StyleSheet.absoluteFill}
        blurRadius={3}
      >
        <View style={styles.darkOverlay} />
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.title}>{id}</Text>
            <Text style={styles.subtitle}>ACADEMIC PROGRAMS</Text>
        </View>

        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.glassCard}
              onPress={() => router.push({
                pathname: `/course/${item.id}`,
                params: { 
                  name: item.name, 
                  about: item.about, 
                  requirements: item.requirements,
                  img: item.img,        // FIXED: Added this
                  videoId: item.videoId, // FIXED: Added this
                  id: item.id 
                }
              })}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.courseName}>{item.name}</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#FFD700" />
              </View>
              <Text style={styles.courseAbout} numberOfLines={2}>{item.about}</Text>
              
              <View style={styles.footer}>
                <MaterialCommunityIcons name="school-outline" size={14} color="#FFD700" />
                <Text style={styles.footerText}>View Entry Requirements</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  darkOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.85)' },
  content: { flex: 1, paddingHorizontal: 20 },
  header: { marginTop: 60, marginBottom: 30, alignItems: 'center' },
  title: { fontSize: 40, fontWeight: "900", color: "#fff", letterSpacing: 2 },
  subtitle: { fontSize: 12, color: "#FFD700", fontWeight: "bold", letterSpacing: 4, marginTop: -5 },
  glassCard: { 
    backgroundColor: 'rgba(255,255,255,0.08)', 
    padding: 20, 
    borderRadius: 25, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.1)' 
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  courseName: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  courseAbout: { color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 20, marginBottom: 15 },
  footer: { flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 10 },
  footerText: { color: "#FFD700", fontSize: 11, fontWeight: "bold", marginLeft: 8, textTransform: 'uppercase' }
});