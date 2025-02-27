import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://job-city-server-six.vercel.app',
    withCredentials: true
});


const useAxiosSecure = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        },
            error => {
                console.log('error cought in interceptor', error);

                if (error.status === 401 || error.status === 403) {

                    console.log('log out user');
                    logoutUser()
                        .then(() => {
                            console.log(' log out user');
                            navigate('/signIn');
                        })
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )
                }

                return Promise.reject(error);
            })

    }, [])

    return axiosInstance;

};

export default useAxiosSecure;