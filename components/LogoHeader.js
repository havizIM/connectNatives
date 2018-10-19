import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoHeader = () => {
	return (
		<Image
			style={styles.logo}
			source={require('../assets/connectUBK2.png')}
		/>
	);
}

export default LogoHeader;

const styles = StyleSheet.create({
	logo: {
		width: 150,
		height: 35,
	}
});