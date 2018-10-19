import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

class NilaiChart extends React.Component {
	
	constructor(props) {
		super(props);
	};

	_setIPK = () => {
        const ip = this.props.ip.data;
        const total_ip = ip.reduce((total_ip, nilai) => total_ip + nilai.ip, 0);
        const total_smt = ip.length;

        const ipk = total_ip / total_smt;
        return parseFloat(ipk).toFixed(2);
    };

	render() {
		return (
			<View style={styles.chartContainer}>
				<Icon.Ionicons name={'ios-document'} size={20} color='#0f1c42' />
				<Text style={styles.chartTitle}>Index Prestasi Kumulatif</Text>
				<Text style={styles.value}>{this._setIPK()}</Text>
		     </View>
		);
	}
}

const mapStateToProps = state => {
    return {
        ip: state.ip
    }
}

export default connect(mapStateToProps)(NilaiChart);

const styles = StyleSheet.create({
	chartContainer: {
		flexDirection: 'row',
		marginTop: '5%',
		backgroundColor: 'white',
		width: '100%',
		paddingVertical: '5%',
		paddingHorizontal: '5%',
	},
	chartTitle: {
		width: '65%',
		marginBottom: 5,
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5,
	},
	value: {
		width: '30%',
		textAlign: 'right',
		fontSize: 18,
		color: '#800000',
		fontWeight: 'bold',
	},
});