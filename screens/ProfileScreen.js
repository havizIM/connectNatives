import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
	AsyncStorage
} from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	_logOut = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('AuthLoading');
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.header}>
						<Image 
							source={require('../assets/ubk192.png')}
							style={styles.profilePicture}
						/>
					</View>
					<View style={styles.row}>
						<Icon.Ionicons name={'ios-card'} size={20} color='#0f1c42' />
						<Text style={styles.label}>NIM</Text>
						<Text style={styles.value}>{this.props.user.nim}</Text>
					</View>
					<View style={styles.row}>
						<Icon.Ionicons name={'ios-person'} size={20} color='#0f1c42' />
						<Text style={styles.label}>Nama</Text>
						<Text style={styles.value}>{this.props.user.nama_lengkap}</Text>
					</View>
					<View style={styles.row}>
						<Icon.Ionicons name={'ios-school'} size={20} color='#0f1c42' />
						<Text style={styles.label}>Prodi</Text>
						<Text style={styles.value}>{this.props.user.nama_prodi}</Text>
					</View>
					<View style={styles.row}>
					<Icon.Ionicons name={'ios-school'} size={20} color='#0f1c42' />
						<Text style={styles.label}>Fakultas</Text>
						<Text style={styles.value}>{this.props.user.nama_fakultas}</Text>
					</View>
					<View style={styles.row}>
						<Icon.Ionicons name={'ios-calendar'} size={20} color='#0f1c42' />
						<Text style={styles.label}>Angkatan</Text>
						<Text style={styles.value}>{this.props.user.angkatan}</Text>
					</View>
				</ScrollView>
				<TouchableOpacity onPress={this._logOut} style={styles.btnLogout} >
					<Text style={styles.btnText}>Logout</Text>
				</TouchableOpacity>
			</View>
			
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#373c5f',
	},
	profilePicture: {
		borderRadius: 50,
		width: 100,
		height: 100,
		marginTop: 35,
		marginBottom: 35,
	},
	btnLogout: {
		backgroundColor: '#f2e4be',
		height: 50,
		paddingVertical: 10,
		bottom: 0,
	},
	btnText: {
		color: 'grey',
		fontSize: 20,
		textAlign: 'center',
	},
	row: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		height: 50,
		paddingVertical: 15,
		alignSelf: 'stretch',
		borderBottomWidth: 1,
		borderColor: 'grey'
	},
	label: {
		width: '45%',
		textAlign: 'left',
		marginLeft: 5,
		fontSize: 15,
	},
	value: {
		width: '50%',
		textAlign: 'right',
		fontSize: 15,
		color: 'grey',
	}
});