import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	AsyncStorage
} from 'react-native';

class InfoScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>InfoScreen</Text>
			</View>
		);
	}
}

export default InfoScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});