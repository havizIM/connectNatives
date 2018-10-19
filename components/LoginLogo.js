import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LoginLogo = () => {
	return (
		<View style={styles.logoContainer}>
			<Image
				style={styles.logo}
				source={require('../assets/connectUBK2.png')}
			/>
			<Text style={styles.title} >
				Everything you need is connected.
			</Text>
		</View>
	);
}

export default LoginLogo;

const styles = StyleSheet.create({
	logoContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 200,
		height: 50,
	},
	title: {
		color: '#dbd4dc',
		fontSize: 15,
		textAlign: 'center',
		marginTop: 5,
		opacity: 0.9,
	}
});