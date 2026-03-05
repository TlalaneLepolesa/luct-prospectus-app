import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const facultyData = {
    FICT: [
        { id: "se", name: "Degree in Software Engineering", videoId: "S7mID-f16Y4", img: "", desc: "Build the future with code and multimedia." },
        { id: "bit", name: "Degree in Business IT", videoId: "2v62_7599v8", img: "", desc: "Merge business strategy with tech." },
        { id: "it", name: "Degree in Information Technology", videoId: "fK_Z-Sj9_Wk", img: "", desc: "Core networking and systems security." },
        { id: "dmse", name: "Dip. Multimedia Software Eng", videoId: "3vVnd7_Nl_Q", img: "", desc: "Foundation in creative coding." },
        { id: "dit", name: "Diploma in IT", videoId: "5_6v-p-R3O8", img: "", desc: "Entry-level professional IT skills." },
    ],
    FBIT: [
        { id: "intb", name: "Degree in International Business", videoId: "m_GstY2X5S8", img: "", desc: "Leadership in global markets." },
        { id: "ent", name: "Degree in Entrepreneurship", videoId: "9IuQ_v_H6Y4", img: "", desc: "Start your own innovative business." },
        { id: "hrm", name: "Degree in HR Management", videoId: "T7a0YI8C0p0", img: "", desc: "Managing talent in modern industry." },
        { id: "dbm", name: "Dip. Business Management", videoId: "m_GstY2X5S8", img: "", desc: "Core business leadership basics." },
        { id: "dmkt", name: "Diploma in Marketing", videoId: "GaM1X7_4F_0", img: "", desc: "Strategic branding and digital ads." },
    ],
    FCDM: [
        { id: "pc", name: "Degree in Prof. Communication", videoId: "QpB_z7998u8", img: "", desc: "Expertise in corporate messaging." },
        { id: "bj", name: "Degree in Broadcasting", videoId: "NToiP26mJzU", img: "", desc: "TV and Radio production career." },
        { id: "pr", name: "Dip. Public Relations", videoId: "QpB_z7998u8", img: "", desc: "Managing brand reputation." },
        { id: "djm", name: "Dip. Journalism & Media", videoId: "S32mD_R6X10", img: "", desc: "News reporting in the digital age." },
        { id: "dtfp", name: "Dip. Film Production", videoId: "fK_Z-Sj9_Wk", img: "", desc: "Directing and digital storytelling." },
    ],
    FCM: [
        { id: "gd", name: "Degree in Graphic Design", videoId: "1pM6uD8XInM", img: "", desc: "Visual branding and illustration." },
        { id: "ani", name: "Degree in Animation", videoId: "0f-2v-3W2wE", img: "", desc: "3D characters and motion graphics." },
        { id: "games", name: "Degree in Games Design", videoId: "S7mID-f16Y4", img: "", desc: "Building interactive digital worlds." },
        { id: "id_dip", name: "Dip. Interior Design", videoId: "1pM6uD8XInM", img: "", desc: "Creative space and home planning." },
        { id: "fad", name: "Dip. Fashion Design", videoId: "0f-2v-3W2wE", img: "", desc: "Global fashion and textile trends." },
    ],
    FABE: [
        { id: "arch", name: "Degree in Architecture", videoId: "fK_Z-Sj9_Wk", img: "", desc: "Designing sustainable future cities." },
        { id: "qs", name: "Degree in Quantity Surveying", videoId: "m_GstY2X5S8", img: "", desc: "Managing construction costs." },
        { id: "id_deg", name: "Degree in Interior Architecture", videoId: "fK_Z-Sj9_Wk", img: "", desc: "Advanced structural aesthetics." },
        { id: "ud", name: "Dip. Urban Design", videoId: "fK_Z-Sj9_Wk", img: "", desc: "Planning efficient city spaces." },
        { id: "cm", name: "Dip. Construction Mgmt", videoId: "m_GstY2X5S8", img: "", desc: "Managing technical building sites." },
    ],
};

export default function CourseList() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const courses = facultyData[id] || facultyData["FICT"];

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > { id }
        Programs < /Text> <
        FlatList data = { courses }
        keyExtractor = {
            (item) => item.id }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity style = { styles.card }
                onPress = {
                    () => router.push({
                        pathname: /course/$ { item.id },
                        params: {
                            name: item.name,
                            desc: item.desc,
                            img: item.img,
                            videoId: item.videoId
                        }
                    })
                } >
                <
                Image source = {
                    { uri: item.img } }
                style = { styles.thumb }
                /> <
                View style = { styles.info } >
                <
                Text style = { styles.name } > { item.name } < /Text> <
                Text style = { styles.descText }
                numberOfLines = { 2 } > { item.desc } < /Text> <
                /View> <
                MaterialIcons name = "play-circle-filled"
                size = { 28 }
                color = "#FFD700" / >
                <
                /TouchableOpacity>
            )
        }
        /> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#000' },
    card: { backgroundColor: '#000', padding: 15, borderRadius: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    thumb: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
    info: { flex: 1 },
    name: { color: '#FFD700', fontSize: 14, fontWeight: 'bold' },
    descText: { color: '#fff', fontSize: 11, opacity: 0.8 }
});