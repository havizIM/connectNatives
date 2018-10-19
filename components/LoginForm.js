import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Icon } from 'expo';

import { handleLogin } from '../actions/auth';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ToastAndroid, AsyncStorage } from 'react-native';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: '',
			password: '',
			isLoading: false,
			press: true
		}
	};

	_handleNIM = (nim) => {
		this.setState({ nim: nim});
	}

	_handlePassword = (password) => {
		this.setState({ password: password });
	}

	_submitLogin = () => {
		this.setState({ isLoading: true });

		if(!this.state.nim || !this.state.password) {
			this._handleError('Please enter your NIM and Password');
		} else {
			    axios({
                method: 'post',
                url: 'http://192.168.43.114/api.connectUBK/auth',
                data: {
        			nim: this.state.nim,
        			password: this.state.password
        		}
            }).then((response) => {
            	 if(response.data.status === 'Failed'){
                    this._handleError(response.data.message);
                  } else {
                    this._makeSession(response.data.user);
                    this.props.handleLogin(response.data.user);
                  }
            }).catch((error) => {
                this._handleError('Failed to access ConnectUBK');
            });

		}
	};

	_makeSession = async (session) => {
		const user = JSON.stringify(session);
		await AsyncStorage.setItem('user', user);
		this.props.navigation.navigate('AuthLoading');
	}

	_handleError = (message) => {
		this.setState({ isLoading: false });
		ToastAndroid.showWithGravity(
				message,
				ToastAndroid.SHORT,
				ToastAndroid.CENTER
		);
	};

	_renderButton = () => {

		if(this.state.isLoading) {
			return <ActivityIndicator color='white' size='large' />;
		}

		return (
			<TouchableOpacity style={styles.buttonContainer} onPress={this._submitLogin}>
         		<Text style={styles.buttonText}>Login</Text>
         	</TouchableOpacity>
		);
	};

	_showPass = () => {

		this.setState({ press: !this.state.press})
	}

	render(){
		return (
	          <View style={styles.loginContainer}>
	          	<View>
		          	<Icon.Ionicons name={'ios-person-outline'} size={28} color={'#f2e4be'} style={styles.inputIcon} />
	          		<TextInput
			         	placeholder='Your NIM'
			         	multiline
		         		onSubmitEditing={() => this.passwordInput.focus()}
			         	returnKeyType='next'
			         	keyboardType='numeric'
			         	underlineColorAndroid="transparent"
			         	placeholderTextColor="grey"
		         		style={styles.input}
		         		onChangeText={(text) => this._handleNIM(text)}
		         		value={this.state.nim}
	         		/>
	          	</View>
	          	<View>
	          		<Icon.Ionicons name={'ios-lock-outline'} size={28} color={'#f2e4be'} style={styles.inputIcon} />
		         	<TextInput
		         		placeholder='Your Password'
		         		returnKeyType='go'
		         		placeholderTextColor="grey"
		         		underlineColorAndroid="transparent"
		         		ref={(input) => this.passwordInput = input}
		         		secureTextEntry={this.state.press}
		         		onChangeText={(text) => this._handlePassword(text)}
		         		style={styles.input}
		         		value={this.state.password}
		         	/>
		         	<TouchableOpacity style={styles.btnPass} onPress={this._showPass} >
		         		<Icon.Ionicons name={this.state.press ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={28} color={'#f2e4be'} />
		         	</TouchableOpacity>
	          	</View>
	          	{this._renderButton()}
	          </View>
		)
	}
}

 const mapDispatchToProps = dispatch => {
    return {
      handleLogin: (user) => dispatch(handleLogin(user))
    };
  };

export default connect(null, mapDispatchToProps)(LoginForm);

const styles = StyleSheet.create({
	loginContainer:{
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		marginBottom: 10,
		color: '#f2e4be',
		paddingHorizontal: 10,
		paddingLeft: 40,
	},
	buttonContainer: {
		backgroundColor: '#800000',
		paddingVertical: 15,
		borderRadius: 25,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700',

	},
	inputIcon: {
		position: 'absolute',
		top: 5,
		left: 8,
	},
	btnPass: {
		position: 'absolute',
		top: 8,
		right: 20,
	}
})