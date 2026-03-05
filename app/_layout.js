import { MaterialIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
    const router = useRouter();

    return ( 
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#FFD700',
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => ( 
                <TouchableOpacity 
                    onPress={() => router.replace('/')}
                    style={{ marginRight: 15 }}
                >
                    <MaterialIcons name="home" size={26} color="#FFD700" />
                </TouchableOpacity>
            ),
        }}>
            <Stack.Screen 
                name="index"
                options={{ title: 'LUCT LESOTHO', headerRight: () => null }}
            />
            <Stack.Screen 
                name="faculty/index"
                options={{ title: 'Our Faculties' }}
            />
            <Stack.Screen 
                name="faculty/[id]"
                options={{ title: 'Choose Course' }}
            />
            <Stack.Screen 
                name="course/[id]"
                options={{ title: 'Course Details' }}
            />
            <Stack.Screen 
                name="quiz"
                options={{ title: 'Career Guide' }}
            />
        </Stack>
    );
}