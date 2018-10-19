import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

const BtnProfile = (props) => {
	return (
		<TouchableOpacity style={{ width: 20 }} onPress={() => props.nav.navigate('Profile')}>
			<Icon.Ionicons name={'ios-person'} size={30} color={'#f2e4be'}  />
		</TouchableOpacity>
	);
}

export default BtnProfile;
