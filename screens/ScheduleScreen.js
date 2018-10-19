import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	AsyncStorage
} from 'react-native';

class ScheduleScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.searchContainer}>
					<Icon.Ionicons name={'ios-search'} size={30} color={'grey'} />
					<TextInput
			         	placeholder='Search...'
			         	multiline
			         	returnKeyType='go'
			         	underlineColorAndroid="transparent"
			         	placeholderTextColor="grey"
		         		style={styles.input}
	         		/>
				</View>
		);
	}
}

export default ScheduleScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});