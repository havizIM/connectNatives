import React from 'react';
import { View, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../actions/auth.js';

class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this._loadApp();
	}

	_loadApp = async () => {
		const user = await AsyncStorage.getItem('user');

		if(user){
			this.props.getUser();
		}
	
		this.props.navigation.navigate(user ? 'App' : 'Auth');
		
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size={75} color='#f2e4be' />
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getUser: () => dispatch(getUser())
	};
}

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0f1c42',
	}
});