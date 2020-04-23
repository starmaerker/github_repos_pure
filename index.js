const inhalt = document.getElementById("inhalt"); 

const getRepos = async (lang) => {
    try {
      const res = await axios.get(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc`);
  
      const todos = res.data;

      console.log(todos);

      document.getElementById("inhalt").innerHTML = "";
  
      for(let i=0; i<30; i++) {
          let child = document.createElement("p");
          let text = document.createTextNode(todos.items[i].name);
          let stargazers = document.createTextNode(todos.items[i].stargazers_count);
          let temp = document.createTextNode(": ");
          child.appendChild(text);
          child.appendChild(temp);
          child.appendChild(stargazers);
          inhalt.appendChild(child);
      }     
  
      return todos;
    } catch (e) {
      console.error(e);
    }
  };