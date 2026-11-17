
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleItem({ item }) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.colorLine,
          { backgroundColor: item.color },
        ]}
      />

      <View style={styles.cardContent}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>
            {item.time}
          </Text>
        </View>

        <Text style={styles.subject}>
          {item.subject}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            📍 {item.room}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            👨‍🏫 {item.teacher}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  colorLine: {
    width: 6,
  },
  cardContent: {
    padding: 16,
    flex: 1,
  },
  timeBox: {
    backgroundColor: '#F0EFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  timeText: {
    color: '#6C63FF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262A53',
    marginBottom: 10,
  },
  infoRow: {
    marginTop: 5,
  },
  infoText: {
    color: '#8589A3',
    fontSize: 13,
  },
});
