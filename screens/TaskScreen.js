import React from 'react';
import {
	View,
	SwipeableFlatList,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight,
	Button,
	ActivityIndicator,
	AsyncStorage
} from 'react-native';
import { Icon } from 'expo';

import { connect } from 'react-redux';
import { getTask } from '../actions/task';

class TaskScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getTask();
	}

	_renderItem = ({ item }) => {
		return (
			<View style={styles.row}>
				<View style={styles.iconContainer}>
					<Icon.Ionicons name={item.metode === 'Email' ? 'ios-mail' : 'ios-document'} size={50} color={item.metode === 'Email' ? '#0f1c42' : 'grey'} />
				</View>
				<View style={styles.rowData}>
					<Text style={styles.rowDataText}>{item.nama_matkul}</Text>
					<Text style={styles.rowDataDetail}>Due Date: {item.tgl_pengumpulan}</Text>
				</View>
			</View>
		);
	}

	_renderQuickActions = () => {
		return (
			<View style={styles.actionContainer}>
				<TouchableHighlight
					style={styles.actionButton}
				>
					<Icon.Ionicons name={'ios-information-circle-outline'} size={30} color='#f2e4be' />
				</TouchableHighlight>
			</View>
		);
	}

	render() {
		const data = this.props.tugas.data.map((task) => {
			const {id_tugas: key, nama_matkul, tgl_pengumpulan, metode} = task;
			return {
				key,
				nama_matkul,
				tgl_pengumpulan,
				metode
			}
		})

		if(this.props.tugas.isLoading) {
			return (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size={75} color='navy' />
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<View>
					<SwipeableFlatList
						data={data}
						bounceFirstRowOnMount
						maxSwipeDistance={50}
						renderItem={this._renderItem.bind(this)}
						renderQuickActions={this._renderQuickActions.bind(this)}
					/>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
      getTask: () => dispatch(getTask())
    };
  };

const mapStateToProps = state => {
	return {
		tugas: state.tugas
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loginContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	widgetContainer: {
		flexDirection: 'row',
		height: '15%',
		width: '100%',
	},
	widgetLeft: {
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	widgetRight: {
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow',
	},
	searchContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: 'white',
		height: '10%',
		borderBottomWidth: 1,
		borderColor: 'grey',
	},
	input: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		paddingHorizontal: 10,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#F6f6f6',
		borderBottomWidth: 1,
		borderColor: 'grey'
	},
	iconContainer: {
		width: 40,
		alignItems: 'center',
		marginRight: 10,
	},
	rowData: {
		flex: 1,
	},
	rowDataText: {
		fontSize: 17,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	rowDataDetail: {
		fontSize: 15,
		textAlign: 'right',
		color: 'grey',
	},
	actionContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	actionButton: {
		padding: 13,
		width: 50,
		backgroundColor: '#0f1c42',
	},
	actionButtonText: {
		textAlign: 'center',
	}
});