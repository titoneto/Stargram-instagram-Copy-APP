const BASE_API = 'http://127.0.0.1:5000'

export default {
    register: async (email, name, user_name, password) => {
        const req = await fetch(`${BASE_API}/auth/register`,{
            method: 'POST',
            body: JSON.stringify({
                email: email,
                name: name,
                user_name: user_name,
                password: password
            })
        })
        const json = await req.json();
        return json;
    }

}