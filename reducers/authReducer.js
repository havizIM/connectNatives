import { AsyncStorage } from 'react-native';

const userState = {};

// const userState = JSON.parse(AsyncStorage.getItem('user')) || {}

export default (state = userState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                nim: action.payload.nim,
                nama_lengkap: action.payload.nama_lengkap,
                tempat_lahir: action.payload.tempat_lahir,
                tgl_lahir: action.payload.tgl_lahir,
                jenis_kelamin: action.payload.jenis_kelamin,
                agama: action.payload.agama,
                no_telepon: action.payload.no_telepon,
                alamat: action.payload.alamat,
                angkatan: action.payload.angkatan,
                nama_prodi: action.payload.nama_prodi,
                nama_fakultas: action.payload.nama_fakultas
            };
        case 'LOGOUT':
            return {};
        default: 
            return state;
    }
}