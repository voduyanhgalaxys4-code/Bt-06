
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleHeader({ count }) {
  return (
    <View style={styles.scheduleHeader}>
      <Text style={styles.sectionTitle}>
        Danh sách môn học
      </Text>

      <Text style={styles.count}>
        {count} môn học
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262A53',
  },
  count: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});
