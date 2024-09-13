import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ title, icon, description }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardIcon}>{icon}</Text>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </TouchableOpacity>
    );
  };

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2d3748',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        width: '48%',
        alignItems: 'center'
      },
      cardIcon: {
        fontSize: 40,
        marginBottom: 10,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
      },
      cardDescription: {
        fontSize: 14,
        color: '#a0aec0',
        textAlign: 'center',
      }
})