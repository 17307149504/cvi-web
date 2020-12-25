import axiosInstance from './index';
export function nerPost(data) {
    return axiosInstance({
        url: '/api/nerPost',
        method: 'post',
        data: data
    })
}