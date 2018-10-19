import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

const BtnBackProfile = (props) => {
	return (
		<TouchableOpacity style={{ width: 30 }}  onPress={() => props.nav.navigate('App')}>
			<Icon.Ionicons name={'ios-arrow-dropleft'} size={30} color={'#f2e4be'} />
		</TouchableOpacity>
	);
}

export default BtnBackProfile;
