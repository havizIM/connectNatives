import { AsyncStorage } from 'react-native';

// export const handleStartLogin = (nim, password) => {
//         return dispatch => {
//            axios({
//                 method: 'post',
//                 url: 'http://192.168.43.114/api.connectUBK/auth',
//                 data: {
//                      nim: nim,
//                      password: password
//                 }
//             }).then((response) => {
//               if(response.data.status === 'Failed'){
//                     // this._handleError(response.data.message);
//                     console.warn('Gagal');
//                   } else {
//                     console.warn('Berhasil') 
//                   }
//             }).catch((error) => {
//                 console.warn('Gagal Akses');
//             });
//         }
// }

export const handleLogin = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export const getUser = () => {
	return dispatch => {
		AsyncStorage.getItem('user')
		.then((user) => {
			const session = JSON.parse(user);
			dispatch(handleLogin(session));
		})
	}
}

export const handleSession = async (user) => {
    await AsyncStorage.setItem('user', user);
}
