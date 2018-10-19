const ipState = {
    data: [
        {
            id_krs: '1',
            semester: '1',
            dosen_wali: 'Syahrianto S.Kom, M.Kom',
            tgl_perwalian: '10-10-2016',
            jumlah_sks: 22,
            ip: 3.76
        },
        {
            id_krs: '2',
            semester: '2',
            dosen_wali: 'Sudirman S.Kom, M.Kom',
            tgl_perwalian: '10-10-2017',
            jumlah_sks: 21,
            ip: 3.90
        },
        {
            id_krs: '3',
            semester: '3',
            dosen_wali: 'Sudirman S.Kom, M.Kom',
            tgl_perwalian: '10-10-2018',
            jumlah_sks: 20,
            ip: 4.00
        }
    
    ],
    filter: ''
}

export default (state = ipState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}