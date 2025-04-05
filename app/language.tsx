import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

const language = () => {
  // State to track the selected language
  const [language, setLanguage] = useState('english');
      const navigation = useNavigation();
  
  // Translations object
  const translations = {
    english: {
      arabic: 'arabic',
      hebrew: 'hebrew',
      english: 'english',
      title: 'Select Language'
    },
    arabic: {
      arabic: 'العربية',
      hebrew: 'العبرية',
      english: 'الإنجليزية',
      title: 'اختر اللغة'
    },
    hebrew: {
      arabic: 'ערבית',
      hebrew: 'עברית',
      english: 'אנגלית',
      title: 'בחר שפה'
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations[language].title}</Text>
      
      <TouchableOpacity onPress={() => setLanguage('arabic')}>
        <Text style={styles.languageText}>{translations[language].arabic}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setLanguage('hebrew')}>
        <Text style={styles.languageText}>{translations[language].hebrew}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setLanguage('english')}>
        <Text style={styles.languageText}>{translations[language].english}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  languageText: {
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    width: 200,
    textAlign: 'center'
  }
});