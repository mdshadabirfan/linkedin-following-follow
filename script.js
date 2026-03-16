const allProfile = document.querySelectorAll(".profile-row");
allProfile.forEach((profile)=>{
   const btn = profile.childNodes[5];
   btn.addEventListener("click", ()=>{
    if(btn.textContent === "Following"){
        btn.classList.remove("following");
        btn.classList.add("follow");
        btn.textContent = "Follow";
    }else{
        btn.classList.remove("follow");
        btn.classList.add("following");
        btn.textContent = "Following";
    }
   })
})