import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Wallet = () => {
  const [balance, setBalance] = useState(100); // Initial balance set to 100 coins
  const [showQR, setShowQR] = useState(false);

  const handleSend = () => {
    // Logic to send coins
    // This function will deduct the sent amount from balance
    // You can implement your logic here
  };

  const handleReceive = () => {
    setShowQR(true);
  };

  return (
    <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24 }}>Wallet Balance: {balance} coins</Text>
      <Button title="Send Coins" onPress={handleSend} />
      <Button title="Receive Coins" onPress={handleReceive} />
      {showQR && (
        <View>
          <Text style={{ color: 'white' }}>Scan this QR code to receive coins</Text>
        </View>
      )}
    </View>
  );
};

export default Wallet;
