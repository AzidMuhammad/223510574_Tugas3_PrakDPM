import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import ProductItem from '../components/ProductItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  const categories = [
    { id: '1', title: 'Fullstack Dev', icon: 'computer', backgroundColor: '#D3D3D3' },
    { id: '2', title: 'Mobile Dev', icon: 'phone-android', backgroundColor: '#F0EAD6' },
    { id: '3', title: 'Data Analyst', icon: 'analytics', backgroundColor: '#E5E4E2' },
    { id: '4', title: 'Website Dev', icon: 'web', backgroundColor: '#F5F5DC' },
  ];

  const products = [
    { id: '1', title: 'Admin Dashboard', image: require('../../assets/images/backend.jpg') },
    { id: '2', title: 'Landing Page', image: require('../../assets/images/fullstack.jpg') },
    { id: '3', title: 'Poster Design', image: require('../../assets/images/web.jpg') },
    { id: '4', title: 'Mobile Apps', image: require('../../assets/images/software.jpg') },
  ];

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Explore What Your Projects Needs</Text>
        <TouchableOpacity>
          <Icon name="dehaze" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Your Developer!"
        placeholderTextColor="#B0B0B0"
      />

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}>
            <Icon name={item.icon} size={32} color="#000" />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#F8A44C',
    fontSize: 14,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 4,
    borderRadius: 12,
    width: 100,
    height: 77,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 32,
  },
});
