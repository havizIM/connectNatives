import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LoginForm, LoginLogo } from '../components';

class LoginScreen extends React.Component {
	static navigationOptions = {
    	header: null,
  	};

  	render() {
  		return (
  				<KeyboardAvoidingView style={styles.container} behavior='padding' >
  					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} >
			  			<View style={styles.container} >
							<LoginLogo />
							<LoginForm {...this.props} />
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
		);
  	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0f1c42',
		flexGrow: 1,
	}
});