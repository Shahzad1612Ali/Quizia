import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

const GK_MCQs = ({ navigation, route }) => {
  const { passedMcqs } = route.params;
  const [totalMcqs, setTotalMcqs] = useState(0);
  const [currentMcq, setCurrentMcq] = useState(1); // Starting with the first question
  const [score, setScore] = useState(0);
  const [correctMcq, setCorrect] = useState('');
  const [selectedMcq, setSelected] = useState('');
  const [timer, setTimer] = useState(60); // 60 seconds timer

  useEffect(() => {
    if (passedMcqs && passedMcqs.length > 0) {
      setTotalMcqs(passedMcqs.length);
      setCorrect(passedMcqs[currentMcq - 1].correct); // Update correct answer whenever the question changes
    }

    // Start a timer that decreases every second
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeOut();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup timer when the component unmounts
  }, [passedMcqs, currentMcq]);

  const handleTimeOut = () => {
    Alert.alert("Time is up. Your Score is: " + score);
    navigation.navigate('GK');
  };

  // If `passedMcqs` is undefined or empty, show a loading indicator
  if (!passedMcqs || passedMcqs.length === 0) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleAnswerSelection = (selectedOption) => {
    setSelected(selectedOption);
    if (selectedOption === correctMcq) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextMcq = () => {
    if (currentMcq < totalMcqs) {
      setCurrentMcq((prev) => prev + 1);
      setSelected(''); // Reset selected answer when moving to the next question
    }
  };

  const previousMcq = () => {
    if (currentMcq > 1) {
      setCurrentMcq((prev) => prev - 1);
      setSelected(''); // Reset selected answer when moving to the previous question
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
          Questions: {currentMcq} / {totalMcqs}
        </Text>
        <Text style={{ fontSize: 20, color: 'white', backgroundColor:'black', padding:5, borderRadius:5  }}>
          Time Left: {timer}s
        </Text>
      </View>

      <Text style={{ marginTop: 10, marginBottom: 20, fontSize: 24 }}>
        {passedMcqs[currentMcq - 1].question}
      </Text>

      {['a', 'b', 'c', 'd'].map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswerSelection(passedMcqs[currentMcq - 1][option])}
        >
          <Text
            style={[
              styles.options,
              selectedMcq === passedMcqs[currentMcq - 1][option] && {
                backgroundColor: selectedMcq === correctMcq ? 'green' : 'red',
              },
            ]}
          >
            {`${option.toUpperCase()}: ${passedMcqs[currentMcq - 1][option]}`}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row', width: '98%' }}>
        <TouchableOpacity
          onPress={previousMcq}
          style={{ backgroundColor: 'black', width: 100, height: 40, borderRadius: 5, marginBottom: 10 }}
        >
          <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', lineHeight: 40 }}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextMcq}
          style={{ backgroundColor: 'black', width: 100, height: 40, borderRadius: 5, marginBottom: 10 }}
        >
          <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', lineHeight: 40 }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          Alert.alert("Your Score is: " + score);
          navigation.navigate('GK');
        }}
        style={styles.submitBtnContainer}
      >
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GK_MCQs;

const styles = StyleSheet.create({
  options: {
    fontSize: 18,
    alignSelf:'center',
    borderRadius: 5,
    width: '98%',
    height: 50,
    elevation: 5,
    marginBottom: 25,
    textAlignVertical: 'center',
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  submitBtnContainer: {
    width: '98%',
    height: 45,
    backgroundColor: '#00ff00',
    borderRadius: 5,
    elevation: 5,
    marginTop: 70,
    justifyContent: 'center',
  },
  submitBtnText: {
    color: '#003300',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  }
});
