
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import DaySelector from './components/DaySelector';
import ScheduleHeader from './components/ScheduleHeader';
import ScheduleItem from './components/ScheduleItem';
import EmptySchedule from './components/EmptySchedule';
import Footer from './components/Footer';

// Danh sách các ngày trong tuần
const days = [
  { id: '2', name: 'T2', date: '16' },
  { id: '3', name: 'T3', date: '17' },
  { id: '4', name: 'T4', date: '18' },
  { id: '5', name: 'T5', date: '19' },
  { id: '6', name: 'T6', date: '20' },
  { id: '7', name: 'T7', date: '21' },
  { id: '8', name: 'CN', date: '22' },
];

// Dữ liệu thời khóa biểu
const schedules = {
  '2': [
    {
      time: '07:00 - 09:30',
      subject: 'Lập trình React Native',
      room: 'Phòng A101',
      teacher: 'Nguyễn Văn An',
      color: '#6C63FF',
    },
    {
      time: '09:45 - 11:15',
      subject: 'Cơ sở dữ liệu',
      room: 'Phòng B203',
      teacher: 'Trần Thị Hoa',
      color: '#FF9F43',
    },
  ],
  '3': [
    {
      time: '07:00 - 09:30',
      subject: 'Lập trình Web',
      room: 'Phòng C102',
      teacher: 'Lê Minh Tuấn',
      color: '#00B894',
    },
    {
      time: '13:00 - 15:30',
      subject: 'Thiết kế giao diện',
      room: 'Phòng A205',
      teacher: 'Phạm Thu Hà',
      color: '#E84393',
    },
  ],
  '4': [
    {
      time: '08:00 - 10:30',
      subject: 'Lập trình React Native',
      room: 'Phòng A101',
      teacher: 'Nguyễn Văn An',
      color: '#6C63FF',
    },
  ],
  '5': [
    {
      time: '07:00 - 09:30',
      subject: 'Mạng máy tính',
      room: 'Phòng D301',
      teacher: 'Hoàng Văn Bình',
      color: '#0984E3',
    },
    {
      time: '13:00 - 15:00',
      subject: 'Cơ sở dữ liệu',
      room: 'Phòng B203',
      teacher: 'Trần Thị Hoa',
      color: '#FF9F43',
    },
  ],
  '6': [
    {
      time: '07:00 - 09:30',
      subject: 'Lập trình Web',
      room: 'Phòng C102',
      teacher: 'Lê Minh Tuấn',
      color: '#00B894',
    },
  ],
  '7': [
    {
      time: '08:00 - 10:00',
      subject: 'Thiết kế giao diện',
      room: 'Phòng A205',
      teacher: 'Phạm Thu Hà',
      color: '#E84393',
    },
  ],
  '8': [],
};

export default function App() {
  const [selectedDay, setSelectedDay] = useState('2');

  const todaySchedules = schedules[selectedDay];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />

      <StudentInfo />

      <DaySelector
        days={days}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />

      <ScheduleHeader count={todaySchedules.length} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {todaySchedules.length > 0 ? (
          todaySchedules.map((item, index) => (
            <ScheduleItem
              key={index}
              item={item}
            />
          ))
        ) : (
          <EmptySchedule />
        )}
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingTop: 45,
    paddingHorizontal: 20,
  },
});
