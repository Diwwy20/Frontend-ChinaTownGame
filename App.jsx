import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import RootNavigation from './navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <RootNavigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})