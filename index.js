const inhalt = document.getElementById("inhalt"); 

const getRepos = async (lang) => {
    try {
      const res = await axios.get(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc`);
  
      const todos = res.data;

      console.log(todos);

      document.getElementById("inhalt").innerHTML = "";
  
      for(let i=0; i<30; i++) {
          let avatar = todos.items[i].owner.avatar_url
          let avatarLink = document.createElement("img")
          avatarLink.setAttribute('src', avatar)          
          let child = document.createElement("p");
          let text = document.createTextNode(todos.items[i].name);
          let stargazers = document.createTextNode(todos.items[i].stargazers_count);
          let temp = document.createTextNode(": ");
          
          child.appendChild(text);
          child.appendChild(temp);
          child.appendChild(stargazers);          
          inhalt.appendChild(child);
          inhalt.appendChild(avatarLink)
      }     
  
      return todos;
    } catch (e) {
      console.error(e);
    }
  };