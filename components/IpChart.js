import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { Icon } from 'expo';
import PureChart from 'react-native-pure-chart';
import { connect } from 'react-redux';


class IpChart extends React.Component {
	
	constructor(props) {
		super(props);
	};

	render() {
		let sampleData = this.props.ip.data.map((nilai) => {
			const { semester: x, ip: y } = nilai;
		    return {
		        x: `Semester ${x}`,
		        y
		    }
		});
		return (
			<View style={styles.chartContainer}>
				<View style={styles.row}>
					<Icon.Ionicons name={'ios-pulse'} size={20} color='#0f1c42' />
					<Text style={styles.chartTitle}>IP Performance</Text>
				</View>
  				<PureChart
  					data={sampleData}
  					type='line'
  					width={'100%'}
				    height={100}
  				/>
		     </View>
		);
	}
}

const mapStateToProps = state => {
    return {
        ip: state.ip
    }
}

export default connect(mapStateToProps)(IpChart);

const styles = StyleSheet.create({
	chartContainer: {
		flex: 1,
		marginTop: '5%',
		backgroundColor: 'white',
		width: '100%',
		paddingVertical: '5%',
		paddingHorizontal: '5%',
	},
	row: {
		flexDirection: 'row',
	},
	chartTitle: {
		marginBottom: 10,
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5,
	},
});