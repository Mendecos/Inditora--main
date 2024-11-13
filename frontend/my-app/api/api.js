import axios from 'axios';
const baseUrl = 'https://minhaapi.com';

// Requisição GET usando fetchUser
const fetchUser = async () => {
 const url = `${baseUrl}/api/users/1`;
 const response = await axios.get(url);
 console.log(response.data);
};

// Função para fazer uma requisição POST
const sendUser = async () => {
    try {
        const response = await axios.post(`${baseUrl}/api/users`, {
            fullName,
            email,
        });
        if (response.status === 201) {
            alert(`You have created: ${JSON.stringify(response.data)}`);
            setIsLoading(false);
            setFullName("");
            setEmail("");
        } else {
            throw new Error("An error has occurred");
        }
    } catch (error) {
        alert("An error has occurred");
        setIsLoading(false);
    }
};
