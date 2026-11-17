
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.appName}>ScheduleApp</Text>
        <Text style={styles.subtitle}>
          Thời khóa biểu cá nhân
        </Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>A</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#262A53',
  },
  subtitle: {
    color: '#8589A3',
    marginTop: 4,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
