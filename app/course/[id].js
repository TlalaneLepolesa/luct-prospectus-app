import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import { MaterialIcons } from "@expo/vector-icons";

export default function CourseDetail() {
  // Catching all params from the previous screen
  const { name, about, requirements, img, videoId } = useLocalSearchParams();
  const [rating, setRating] = useState(0);

  // Logic to check if it's a YouTube ID or a Facebook Link
  const isYouTube = videoId && !videoId.includes("facebook.com");

  return (
    <ScrollView style={styles.container}>
      {/* 1. THE COURSE IMAGE (Ensuring it uses the 'img' param) */}
      {img ? (
        <Image source={{ uri: img }} style={styles.headerImg} />
      ) : (
        <View style={styles.imagePlaceholder}><Text>No Image Available</Text></View>
      )}
      
      <View style={styles.content}>
        {/* 2. COURSE NAME */}
        <Text style={styles.title}>{name}</Text>
        
        {/* 3. ABOUT DESCRIPTION */}
        <Text style={styles.aboutText}>{about}</Text>

        {/* 4. REQUIREMENTS */}
        <Text style={styles.label}>Course Requirements:</Text>
        <Text style={styles.reqText}>{requirements}</Text>
        
        {/* 5. VIDEO PLAYER SECTION */}
        <Text style={styles.label}>Course Insight Video:</Text>
        <View style={styles.videoBox}>
          {videoId ? (
            isYouTube ? (
              <YoutubePlayer height={220} videoId={videoId} />
            ) : (
              <WebView 
                source={{ uri: videoId }} 
                style={{ flex: 1 }} 
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            )
          ) : (
            <View style={styles.noVideo}>
               <MaterialIcons name="videocam-off" size={40} color="#666" />
               <Text style={{color: '#666', marginTop: 10}}>Video Coming Soon</Text>
            </View>
          )}
        </View>

        {/* 6. RATING SECTION */}
        <View style={styles.ratingSection}>
          <Text style={styles.ratingLabel}>Rate your interest (1-6):</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5, 6].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <MaterialIcons
                  name={star <= rating ? "star" : "star-border"}
                  size={32}
                  color="#FFD700"
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.scoreText}>{rating} / 6 Stars</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }, // White background back
  headerImg: { width: '100%', height: 220, resizeMode: 'cover' },
  imagePlaceholder: { width: '100%', height: 220, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  content: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#000' },
  aboutText: { fontSize: 16, color: '#444', marginTop: 10, lineHeight: 22 },
  label: { fontWeight: 'bold', fontSize: 18, marginTop: 25, marginBottom: 8, color: '#000' },
  reqText: { fontSize: 15, color: '#666', lineHeight: 20 },
  videoBox: { height: 220, backgroundColor: '#f0f0f0', borderRadius: 15, overflow: 'hidden', marginVertical: 10 },
  noVideo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  ratingSection: { backgroundColor: '#000', padding: 20, borderRadius: 20, alignItems: 'center', marginTop: 30 },
  ratingLabel: { color: '#fff', marginBottom: 10, fontSize: 16 },
  stars: { flexDirection: 'row' },
  scoreText: { color: '#FFD700', fontSize: 20, marginTop: 10, fontWeight: 'bold' }
});