import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const menuItems = [
        { id: 'courses', label: 'Courses', icon: 'book' },
        { id: 'campus', label: 'Campus', icon: 'university' },
        { id: 'apply', label: 'Apply Now', icon: 'edit' },
        { id: 'news', label: 'News', icon: 'newspaper' },
        { id: 'events', label: 'Events', icon: 'calendar-day' },
        { id: 'contact', label: 'Contact', icon: 'phone' },
    ];

    const handleMenuPress = (id) => {
        if (id === 'courses') {
            router.push('/faculty');
        } else {
            Alert.alert("Limkokwing Lesotho", `The ${id} section is currently being updated.`);
        }
    };

    return ( <
        ScrollView style = { styles.container } > { /* Branding */ } <
        View style = { styles.brandBox } >
        <
        Image source = {
            { uri: 'https://www.limkokwing.net/images/logo.png' } }
        style = { styles.logo }
        resizeMode = "contain" /
        >
        <
        /View>

        { /* SEARCH BAR RE-ADDED */ } <
        View style = { styles.searchContainer } >
        <
        MaterialIcons name = "search"
        size = { 22 }
        color = "#888" / >
        <
        TextInput style = { styles.searchInput }
        placeholder = "Search courses or faculties..."
        value = { search }
        onChangeText = { setSearch }
        /> <
        /View>

        <
        Text style = { styles.sectionTitle } > Explore < /Text>

        <
        View style = { styles.grid } > {
            menuItems.map((item) => ( <
                TouchableOpacity key = { item.id }
                style = { styles.gridItem }
                onPress = {
                    () => handleMenuPress(item.id) } >
                <
                View style = { styles.iconCircle } >
                <
                FontAwesome5 name = { item.icon }
                size = { 22 }
                color = "#000" / >
                <
                /View> <
                Text style = { styles.gridLabel } > { item.label } < /Text> <
                /TouchableOpacity>
            ))
        } <
        /View>

        { /* Career Quiz Banner (Gold/Yellow) */ } <
        TouchableOpacity style = { styles.quizBanner }
        onPress = {
            () => router.push("/quiz") } >
        <
        View style = { styles.quizContent } >
        <
        MaterialIcons name = "stars"
        size = { 30 }
        color = "#000" / >
        <
        View style = {
            { marginLeft: 10 } } >
        <
        Text style = { styles.quizTitle } > Find Your Perfect Faculty < /Text> <
        Text style = { styles.quizSub } > Take the career guide survey < /Text> <
        /View> <
        /View> <
        MaterialIcons name = "chevron-right"
        size = { 30 }
        color = "#000" / >
        <
        /TouchableOpacity>

        <
        View style = { styles.footerInfo } >
        <
        Text style = { styles.footerText } > ©2026 Limkokwing University Lesotho < /Text> <
        /View> <
        /ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    brandBox: { alignItems: 'center', marginBottom: 15 },
    logo: { width: 180, height: 40 },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
        borderRadius: 12,
        height: 50,
        marginTop: 10
    },
    searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15, color: '#000' },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    gridItem: { width: '30%', backgroundColor: '#fff', alignItems: 'center', padding: 15, marginBottom: 15, borderRadius: 15, elevation: 2, borderWidth: 1, borderColor: '#eee' },
    iconCircle: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#FFD700', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
    gridLabel: { fontWeight: 'bold', fontSize: 11, textAlign: 'center' },
    quizBanner: { backgroundColor: '#FFD700', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderRadius: 15, marginTop: 10 },
    quizContent: { flexDirection: 'row', alignItems: 'center' },
    quizTitle: { fontWeight: 'bold', fontSize: 16 },
    quizSub: { fontSize: 12, color: '#333' },
    footerInfo: { marginTop: 40, alignItems: 'center', paddingBottom: 20 },
    footerText: { color: '#AAA', fontSize: 12 }
});