import callApi from './axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const link = 'user/listDoctor?categoryId=1&lon=0&lat=0&page=0&rating=0';

const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('IdCategory');
        if (value !== null) {
            console.log(value);
        }
    } catch (error) {
        console.log(error);
    }
};

export const getListCategory = (setDatasCategory) => {
    callApi('user/listCategory', 'get')
        .then((res) => {
            setDatasCategory(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export const getListDoctor = (setDatasDoctor) => {
    callApi(link, 'get')
        .then((res) => {
            setDatasDoctor(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export const getProfile = (setDatas) => {
    callApi('patient/myProfile', 'get')
        .then((res) => {
            setDatas(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
};
