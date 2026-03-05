import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
// IMPORT ICONS HERE
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HomeScreen() {
  const router = useRouter();

  // Updated with professional icon names
  const faculties = [
    { id: 'FICT', name: 'Information Tech', icon: 'monitor-shimmer' },
    { id: 'FBIT', name: 'Business & IT', icon: 'finance' },
    { id: 'FCDM', name: 'Communication & Media', icon: 'broadcast' },
    { id: 'FCM', name: 'Creative Multimedia', icon: 'palette-outline' },
    { id: 'FABE', name: 'Built Environment', icon: 'city-variant-outline' },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/grad_bg.jpg')} 
        style={StyleSheet.absoluteFill}
        blurRadius={3} // Increased blur slightly for a cleaner look
      >
        <View style={styles.darkOverlay} />
      </ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../assets/images/global_header.jpg')} style={styles.header}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.95)']} style={styles.gradient} />
          <Text style={styles.uniTitle}>LIMKOKWING</Text>
          <Text style={styles.uniSubTitle}>LESOTHO</Text>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>SELECT FACULTY</Text>
          
          <View style={styles.grid}>
            {faculties.map((f) => (
              <TouchableOpacity 
                key={f.id} 
                style={styles.glassCard} 
                onPress={() => router.push(`/faculty/${f.id}`)}
              >
                <View style={styles.iconCircle}>
                  {/* Vector Icon replaces the Emoji */}
                  <MaterialCommunityIcons name={f.icon} size={30} color="#FFD700" />
                </View>
                <Text style={styles.cardName}>{f.name}</Text>
                <View style={styles.badge}><Text style={styles.cardCode}>{f.id}</Text></View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/quiz')}>
            <LinearGradient colors={['#FFD700', '#E5B800']} style={styles.ctaGradient}>
              <Text style={styles.ctaText}>START CAREER MATCH QUIZ</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  darkOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.8)' },
  header: { height: 280, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 },
  gradient: { ...StyleSheet.absoluteFillObject },
  uniTitle: { color: '#fff', fontSize: 38, fontWeight: '900', letterSpacing: 5 },
  uniSubTitle: { color: '#FFD700', fontSize: 18, fontWeight: 'bold', letterSpacing: 10, marginTop: -5 },
  content: { padding: 20 },
  sectionTitle: { color: '#fff', fontSize: 14, fontWeight: '800', marginBottom: 25, opacity: 0.6, textAlign: 'center', letterSpacing: 2 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  glassCard: { 
    backgroundColor: 'rgba(255,255,255,0.08)', 
    width: '48%', 
    paddingVertical: 25, 
    paddingHorizontal: 10,
    borderRadius: 30, 
    marginBottom: 15, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  iconCircle: { width: 55, height: 55, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  cardName: { color: '#fff', textAlign: 'center', fontWeight: '700', fontSize: 13, marginBottom: 8 },
  badge: { backgroundColor: 'rgba(255,215,0,0.15)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 5 },
  cardCode: { color: '#FFD700', fontSize: 10, fontWeight: 'bold' },
  ctaButton: { marginTop: 25, borderRadius: 20, overflow: 'hidden' },
  ctaGradient: { paddingVertical: 20, alignItems: 'center' },
  ctaText: { color: '#000', fontWeight: '900', fontSize: 15, letterSpacing: 1.5 }
});