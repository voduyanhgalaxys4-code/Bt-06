
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptySchedule() {
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyIcon}>📅</Text>

      <Text style={styles.emptyTitle}>
        Hôm nay không có lịch học
      </Text>

      <Text style={styles.emptyText}>
        Bạn có thể nghỉ ngơi hoặc tự học nhé!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  emptyIcon: {
    fontSize: 45,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262A53',
    marginTop: 15,
  },
  emptyText: {
    color: '#8589A3',
    textAlign: 'center',
    marginTop: 8,
  },
});
