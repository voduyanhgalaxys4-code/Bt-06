
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentInfo() {
  return (
    <View style={styles.studentBox}>
      <Text style={styles.studentLabel}>SINH VIÊN</Text>

      <Text style={styles.studentName}>Võ Duy Anh</Text>

      <Text style={styles.studentInfo}>
        Chúc bạn một ngày học tập hiệu quả!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  studentBox: {
    backgroundColor: '#6C63FF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },
  studentLabel: {
    color: '#DCD9FF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  studentName: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 5,
  },
  studentInfo: {
    color: '#E8E6FF',
    marginTop: 7,
  },
});
