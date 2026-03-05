import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const faculties = [
    { id: "FICT", name: "Information & Communication Technology" },
    { id: "FBIT", name: "Business Management & Globalization" },
    { id: "FCM", name: "Creative Multimedia" },
    { id: "FCDM", name: "Communication, Media & Broadcasting" },
    { id: "FABE", name: "Architecture & Built Environment" },
];

export default function FacultyList() {
    const router = useRouter();

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.header } > Our Faculties < /Text> <
        FlatList data = { faculties }
        keyExtractor = {
            (item) => item.id }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity style = { styles.card }
                onPress = {
                    () => router.push(`/faculty/${item.id}`) } >
                <
                Text style = { styles.name } > { item.name } < /Text> <
                Text style = { styles.viewText } > VIEW COURSES < /Text> <
                /TouchableOpacity>
            )
        }
        /> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    card: {
        backgroundColor: '#000',
        padding: 25,
        borderRadius: 15,
        marginVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: { fontSize: 14, fontWeight: 'bold', color: '#FFD700', flex: 1 },
    viewText: { fontSize: 10, color: '#FFF', fontWeight: 'bold', marginLeft: 10 }
});