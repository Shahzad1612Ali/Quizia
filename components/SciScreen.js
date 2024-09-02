import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Instructions from './Instructions';
import { useNavigation } from '@react-navigation/native';

const SciMCQsScreen = () => {
  const navigation = useNavigation();
  const [ScienceMCQs, setScienceMCQs] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const ReadData = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch('https://sheetdb.io/api/v1/d8kwmn4yty1qf');
      const data = await response.json();
      setScienceMCQs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false once fetching is complete
    }
  };

  useEffect(() => {
    if (ScienceMCQs.length > 0) {
      // Only navigate when data is ready
      navigation.navigate('Math_MCQs', { passedMcqs: ScienceMCQs });
    }
  }, [ScienceMCQs]); // Watch ScienceMCQs for changes

  const handleStartQuiz = () => {
    ReadData(); // Fetch data and let useEffect handle the navigation
  };

  return (
    <View>
      <Instructions />
      <TouchableOpacity
        onPress={handleStartQuiz}
        style={{
          margin: 10,
          backgroundColor: 'grey',
          borderRadius: 15,
          marginTop: 20,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Start Quiz</Text>
      </TouchableOpacity>

      {/* Show loading indicator while data is being fetched */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};



export default SciMCQsScreen