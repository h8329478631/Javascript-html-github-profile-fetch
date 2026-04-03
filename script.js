
let input = document.getElementById("input")

document.getElementById("ref").addEventListener("click",()=>{
console.log(input.value)

fetch(`https://api.github.com/users/${input.value}`).then(res => res.json())
        .then(data =>{
            
            let image = document.getElementById("image")
            let name = document.getElementById("name")
            let followers = document.getElementById("followers")
            let followings = document.getElementById("followings")
            let bio = document.getElementById("bio")
            let public_repo = document.getElementById("repo")
            let repo = document.getElementById("repourl")

            repo.innerHTML = " "

            image.setAttribute("src",data.avatar_url)
            name.innerHTML = data.name
            followers.innerHTML = data.followers
            followings.innerHTML = data.following
            bio.innerHTML = data.bio
            public_repo.innerHTML = data.public_repos

            repo_url = data.repos_url

            fetch(repo_url)
            .then(res=> res.json())
            .then(repodata =>{
                
                for(let i=0; i<repodata.length;i++){
                        link_url = repodata[i].svn_url
                   repo.innerHTML += `<span><a href = "${link_url}">${repodata[i].name}</a></span><br><br>`
                    
                  
                   
                }
            })
            
            
        })

input.value = "" 
})

