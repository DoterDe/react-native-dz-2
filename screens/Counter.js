import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native';

const Counter = ({ navigation }) => {
  const [balance, setBalance] = useState(0); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [inputAmount, setInputAmount] = useState(''); 
  const [actionType, setActionType] = useState(''); 

  const replenishAccount = () => {
    setActionType('replenish');
    setModalVisible(true);
  };

  const takeOffAccount = () => {
    setActionType('takeOff');
    setModalVisible(true);
  };

  const handleSubmit = () => {
    const amount = parseFloat(inputAmount);

    if (!isNaN(amount) && amount > 0) {
      if (actionType === 'replenish') {
        setBalance((prevBalance) => prevBalance + amount);
      } else if (actionType === 'takeOff' && amount <= balance) {
        setBalance((prevBalance) => prevBalance - amount);
      } else if (actionType === 'takeOff' && amount > balance) {
        alert('Недостаточно средств на счёте');
      }
      setInputAmount(''); 
      setModalVisible(false);
    } else {
      alert('Введите корректную сумму');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ваш счёт: {balance} руб.</Text>
      <View style={styles.buttons}>
        <Button title="Пополнить" onPress={replenishAccount} />
        <Button title="Снять" onPress={takeOffAccount} />
      </View>

      <Button title="Главная" onPress={() => { navigation.navigate('Main'); }} />

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {actionType === 'replenish' ? 'Пополнить счёт' : 'Снять со счёта'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Введите сумму"
              value={inputAmount}
              onChangeText={setInputAmount}
              keyboardType="numeric"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleSubmit} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Отмена</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
    margin: 5,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Counter;
