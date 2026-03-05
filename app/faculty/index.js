import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { id: "FICT", name: "Information Tech", icon: "laptop-code", color: "#000" },
    { id: "FBIT", name: "Business & IT", icon: "chart-line", color: "#000" },
    { id: "FCDM", name: "Communication & Media", icon: "broadcast-tower", color: "#000" },
    { id: "FCM", name: "Creative Multimedia", icon: "palette", color: "#000" },
    { id: "FABE", name: "Built Environment", icon: "building", color: "#000" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Branding Header */}
      <View style={styles.brandBox}>
        <Text style={styles.brandText}>LIMKOKWING</Text>
        <Text style={styles.subBrandText}>UNIVERSITY LESOTHO</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a program..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text style={styles.sectionTitle}>Explore Faculties</Text>

      {/* Faculty Grid */}
      <View style={styles.grid}>
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.gridItem}
            onPress={() => router.push(`/faculty/${item.id}`)}
          >
            <FontAwesome5 name={item.icon} size={30} color={item.color} />
            <Text style={styles.gridText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Career Quiz Banner */}
      <TouchableOpacity 
        style={styles.quizBanner}
        onPress={() => router.push("/quiz")}
      >
        <View style={styles.quizContent}>
          <MaterialIcons name="stars" size={40} color="#000" />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.quizTitle}>Not sure what to study?</Text>
            <Text style={styles.quizSub}>Take the Career Match Quiz</Text>
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={30} color="#000" />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerInfo}>
        <Text style={styles.footerText}>© 2026 Limkokwing University Lesotho</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  brandBox: { backgroundColor: "#000", padding: 40, alignItems: "center" },
  brandText: { color: "#fff", fontSize: 28, fontWeight: "bold", letterSpacing: 2 },
  subBrandText: { color: "#FFD700", fontSize: 14, marginTop: 5 },
  searchContainer: { 
    flexDirection: "row", 
    backgroundColor: "#f2f2f2", 
    margin: 20, 
    padding: 12, 
    borderRadius: 10, 
    alignItems: "center" 
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 20, marginBottom: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", padding: 10, justifyContent: "space-between" },
  gridItem: { 
    width: "45%", 
    backgroundColor: "#fff", 
    padding: 20, 
    margin: "2.5%", 
    borderRadius: 15, 
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee"
  },
  gridText: { marginTop: 10, fontWeight: "600", textAlign: "center", fontSize: 12 },
  quizBanner: { 
    backgroundColor: "#FFD700", 
    margin: 20, 
    padding: 20, 
    borderRadius: 15, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between" 
  },
  quizContent: { flexDirection: "row", alignItems: "center" },
  quizTitle: { fontWeight: "bold", fontSize: 16 },
  quizSub: { fontSize: 13, opacity: 0.8 },
  footerInfo: { padding: 30, alignItems: "center" },
  footerText: { color: "#888", fontSize: 12 }
});