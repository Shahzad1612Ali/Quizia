import { View, Text } from 'react-native'
import React from 'react'

const Instructions = () => {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }}>Read Instructoins Carefully.</Text>

            <View style={{ marginLeft: 5, marginTop: 20 }}>
                <Text>1- There is no negative marking.</Text>
                <Text>2- Solve as much questions as you can</Text>
                <Text>3- The screen cannot b minimized or closing of test Tab will result in the Cancellation of Test</Text>
                <Text>4- You have 30 minutes for this Test. Be sure submittion before time.</Text>
                <Text>5- Click on Start Button to Start The Test.</Text>
            </View>
        </View>
    )
}

export default Instructions