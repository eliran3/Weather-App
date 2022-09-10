import axios from 'axios'

const uuid = require('uuid');

const url = "api/users/";

class UserService {
    // Get user
    static GetUser() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                
                resolve(
                    data.map(user => ({
                        ...user,
                        "id": user.id,
                        "username": user.username,
                        "password": user.password
                    }))
                );
            } catch (err) {
                reject(err);
                console.log(err);
            }
        })
    }

    // Add user
    /**
     * @param {string} username - The username
     * @param {string} password - The password
     */
    static async AddUser(username, password) {
        try {
            console.log("erryes:");
            const response = await axios.post(url, {
                "id": uuid.v4(),
                "username": username,
                "password": password
            });
            console.log(response);
        } catch (error) {
            console.log("errno:");
            console.log(error.response);
        }
    }
}

export default UserService;
