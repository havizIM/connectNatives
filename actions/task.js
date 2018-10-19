import axios from 'axios';

export const getTask = () => {
	return dispatch => {
		axios.get('http://192.168.43.114/api.connectUBK/task')
		.then((response) => {
			if(response.data.status === 'Failed'){
	            console.warn('Gagal');
	          } else {
	            dispatch(fetchTask(response.data.task));
	            dispatch(setLoading());
	          }
		})
		.catch((error) => {
                console.warn('Gagal Akses');
      	});
	}
}

export const fetchTask = (task) => {
  return {
    type: 'FETCH_TASK',
    payload: task
  }
}

export const setLoading = () => {
	return {
		type: 'SUCCESS_FETCH_TASK'
	}
}