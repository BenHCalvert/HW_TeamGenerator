function askAboutIt(){
    inquirer.prompt(questions)
    .then(function(response) {
        const gitUser = response.username;
        const color = response.color;
        const gitURL = 'https://github.com/';
        const gitProfile = `${gitURL}${gitUser}`;  
        console.log(`Thanks! Your favorite color is ${color} and your github url is ${gitProfile}.`);
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        const starredURL = `https://api.github.com/users/${data.username}/starred`;

        axios.get(queryUrl).then(function(response) {
            
            fs.writeFile("test.txt", response.name , function(err) {
              if (err) {
                throw err;
              }
      
              console.log(`Saved ${response.name} to file`);
            });
          });
    });
};
askAboutIt();