import axios from "axios";

export const searchUsers = async (username) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
  
    username=username.toLowerCase()
    
    const userData = [];

    const usersFound = data.users.find((user) => user.username.toLowerCase().includes(username));

 
    if(usersFound){
      userData.push(usersFound); 
      return userData
   }else{
      return userData
   }

   
  } catch (e) {
    console.log(e);
  }
};