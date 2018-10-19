import React from 'react';
import {
	ScrollView,
	Text,
	StyleSheet
} from 'react-native';
import { IpChart, NilaiChart } from '../components';


const HomeScreen = (props) => {
	return (
		<ScrollView style={styles.container}>
			<IpChart />
			<NilaiChart />
	    </ScrollView>
	);
}

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: '5%',
	}
});