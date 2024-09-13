import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/Card';

const Recommend = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <Text style={styles.title}>CHINA TOWN</Text>
                <Text style={styles.subtitle}>Discover the wonders of China Town</Text>
            </View>

            <View style={styles.cardContainer}>
                <Card title="Temple" icon="🏯" description="Visit our ancient temples" />
                <Card title="Clock Tower" icon="🕰️" description="See the iconic clock tower" />
                <Card title="Ferris Wheel" icon="🎡" description="Enjoy panoramic views" />
                <Card title="Local Cuisine" icon="🥢" description="Taste authentic dishes" />
                <Card title="Cultural Events" icon="🏮" description="Experience our festivals" />
                <Card title="Shopping" icon="🛍️" description="Explore unique markets" />
            </View>
            
            <TouchableOpacity 
                style={styles.nextButton} 
                onPress={() => navigation.navigate('Load')}
            >
                <LinearGradient
                    colors={['#FECB38', '#F89B1A']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>© {new Date().getFullYear()} China Town App. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
};

export default Recommend;

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
        backgroundColor: '#1a202c',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fbbf24',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#fdba74',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    nextButton: {
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',  
    },
    gradient: {
        width: '100%',
        height: 50,  
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1a202c',
    },
    footer: {
        alignItems: 'center',
    },
    footerText: {
        color: '#718096',
        fontSize: 14,
    },
});
