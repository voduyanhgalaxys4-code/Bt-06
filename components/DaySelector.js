
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DaySelector({
  days,
  selectedDay,
  onSelectDay,
}) {
  return (
    <View style={styles.weekSection}>
      <Text style={styles.sectionTitle}>
        Lịch học trong tuần
      </Text>

      <Text style={styles.month}>
        Tháng 11, 2026
      </Text>

      <View style={styles.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day.id}
            style={[
              styles.dayItem,
              selectedDay === day.id && styles.selectedDay,
            ]}
            onPress={() => onSelectDay(day.id)}
          >
            <Text
              style={[
                styles.dayName,
                selectedDay === day.id && styles.selectedText,
              ]}
            >
              {day.name}
            </Text>

            <Text
              style={[
                styles.dayDate,
                selectedDay === day.id && styles.selectedText,
              ]}
            >
              {day.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262A53',
  },
  month: {
    color: '#8589A3',
    marginTop: 5,
    marginBottom: 15,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    width: 42,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#6C63FF',
  },
  dayName: {
    fontSize: 12,
    color: '#8589A3',
  },
  dayDate: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#262A53',
    marginTop: 5,
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
