class Github{
    constructor(){
        this.client_id = '9179bcefc436adf93621';
        this.client_secret = '2548cce1ceda0d6ce231e51ec9c52211efcb36ab';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();



        //returning a object
        return { 
            profile
            // or profile: profile
            
        }
    }
}
