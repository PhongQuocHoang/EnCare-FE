import callApi from './axiosClient';

export const getListCategory = (setDatasCategory) => {
    callApi('api/user/listCategory', 'get')
        .then((res) => {
            setDatasCategory(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export const getListDoctor = (setDatasDoctor, id) => {
    const link = `api/user/listDoctor?categoryId=${id}&lon=0&lat=0&page=0&rating=0`;
    callApi(link, 'get')
        .then((res) => {
            setDatasDoctor(res.data.data);
            // console.log(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export const getProfile = (setDatas) => {
    callApi('api/patient/myProfile', 'get')
        .then((res) => {
            setDatas(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export const getDoctorId = (setDatas, id) => {
    const link = `find/doctor/${id}`;
    callApi(link, 'get')
        .then((res) => {
            setDatas(res.data.data);
            // console.log(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};
