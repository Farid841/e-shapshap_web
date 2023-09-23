import axios from 'axios';
import Swal from 'sweetalert2'; // si Swal est utilisé ici, il doit être importé

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 10000,
});

export const register = (userData) => {
    return instance.post("/signup", userData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const login = (userData) => {
    return instance.post("/login", userData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const forgotPassword = (userData) => {
    return instance.post("/forgot-password", userData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const sendEmail = async (name, email, subject, message) => {
    if (!name || !email || !subject || !message) {
        throw new Error("Tous les champs sont obligatoires");
    } else {
        try {
            const response = await instance.post('/send-email', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });

            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    text: `Thank you, ${name}! We will get back to you shortly.`,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again later.",
            });
        }
    }
};

export default instance;
