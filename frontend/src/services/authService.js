import axiosClient from '../api/axiosClient';

const authService = {
    // Login
    login: (credentials) => {
        return axiosClient.post('/auth/login', credentials);
    },

    // Register
    register: (userData) => {
        return axiosClient.post('/auth/register', userData);
    },

    // Logout
    logout: () => {
        return axiosClient.post('/auth/logout');
    },

    // Forgot password - Send OTP
    forgotPassword: (email) => {
        return axiosClient.post('/auth/forgot-password', { email });
    },

    // Verify reset OTP
    verifyResetOTP: (email, otp) => {
        return axiosClient.post('/auth/verify-reset-otp', { email, otp });
    },

    // Reset password with OTP
    resetPassword: (email, otp, newPassword) => {
        return axiosClient.post('/auth/reset-password', { email, otp, newPassword });
    },

    // Change password
    changePassword: (data) => {
        return axiosClient.post('/auth/change-password', data);
    },

    // Get current user profile
    getProfile: () => {
        return axiosClient.get('/auth/profile');
    },

    // Update user profile
    updateProfile: (data) => {
        return axiosClient.put('/auth/profile', data);
    },

    // Email authentication
    verifyEmail: (verifyCode) => {
        return axiosClient.post('/auth/verify-email', { verifyCode });
    },

    // Resend verification email
    sendNewVerifyEmail: (email, username) => {
        return axiosClient.post('/auth/new-verify', { email, username });
    },

    // Forgot verify email
    checkVerificationStatus: (email) => {
        return axiosClient.post('/auth/check-verification', { email });
    },

    // Check login name
    checkUsername: (username) => {
        return axiosClient.post('/auth/check-username', { username });
    },

    // Check email
    checkEmail: (email) => {
        return axiosClient.post('/auth/check-email', { email });
    }
};
export default authService; 