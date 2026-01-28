export const categories = {
    139: "Blockchain",
    143: "Development",
    141: "Guide",
    138: "Marketing",
    135: "News",
    1: "Design",
    142: "Web3"
};


 const regex = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        message: /^.{5,}$/,
    };

 export  const validateForm = (payload) => {
        const validationErrors = {};

        if (!payload.name) {
            validationErrors.name = "Name is required";
        } 
        // else if (!regex.name.test(payload.name)) {
        //     validationErrors.name = "Name must contain only letters and spaces";
        // }
        if (!payload.email) {
            validationErrors.email = "Email is required";
        } else if (!regex.email.test(payload.email)) {
            validationErrors.email = "Invalid email format";
        }
        const cleanedMessage = payload.message.replace(/\s/g, '');
        if (!payload.message) {
            validationErrors.message = "Message is required";
        } else if (cleanedMessage.length < 5) {
            validationErrors.message = "Message must be at least 5 non-space characters";
        }

         if (!recaptchaToken) {
            validationErrors.recaptcha = "Please complete the reCAPTCHA verification.";
        }

        return validationErrors;
    };