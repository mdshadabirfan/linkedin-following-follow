const allProfiles = document.querySelectorAll(".profile-row");
allProfiles.forEach((profile, idx)=>{
    const followBtn = profile.querySelector(".following");
    followBtn.addEventListener("click", ()=>{
        if(followBtn.textContent === "Following"){
            followBtn.textContent = "Follow";
            followBtn.classList.remove("following");
            followBtn.classList.add("follow");
        }else{
            followBtn.textContent = "Following";
            followBtn.classList.remove("follow");
            followBtn.classList.add("following");
        }
    })
    
})