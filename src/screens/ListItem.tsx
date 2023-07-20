import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ListItemProps {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ name, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isSelected ? styles.selected : null]}>
      <Text style={[styles.text, isSelected ? styles.selectedText : styles.defaultText]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 6,
  },
  selected: {
    backgroundColor: '#129575',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  defaultText: {
    color: 'green',
  },
  selectedText: {
    color: 'white',
  },
});

export default ListItem;
