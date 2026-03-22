const allProfiles = document.querySelectorAll(".profile-row");
allProfiles.forEach((profile)=>{
    let btn = profile.querySelector("button");
    btn.addEventListener("click", (e)=>{
        if(btn.textContent === "Following"){
            btn.textContent = "Follow";
            btn.classList.remove("following");
            btn.classList.add("follow");
        }else{
            btn.textContent = "Following";
            btn.classList.remove("follow");
            btn.classList.add("following");
        }
    })
})