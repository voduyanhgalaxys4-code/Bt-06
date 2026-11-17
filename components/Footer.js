
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        ScheduleApp © 2026 | Võ Duy Anh
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#A0A3B8',
    fontSize: 11,
  },
});
