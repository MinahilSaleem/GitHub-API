"use strict"
let input = document.querySelector("input")
let card = document.querySelector(".wrapper");
let button = document.querySelector("button")

const fetchData = async() =>{
        const response = await fetch(`https://api.github.com/users/${input.value}`);
        const data = await response.json();

        try{
            if (data.name === undefined ) {
                card.innerHTML = "User Not Found!"
            }else{
            let html = `
            <div class="profile">
                <img src="${data.avatar_url}" alt="">
                <div class="details">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                    <div class="achievments">
                        <p>${data.followers} Follower</p>
                        <p>${data.following} Following</p>
                        <p>${data.public_repos} Repo</p>
                    </div>
                </div>
            </div>`
            card.innerHTML = html;
            }
        }catch(err){
            card.innerHTML = "User Not Found!";
        }

};
button.addEventListener("click", fetchData);