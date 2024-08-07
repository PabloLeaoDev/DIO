
function updateProfileInfo(profileData) {
    const photo = document.querySelector('#profile-photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;
    
    const name = document.querySelector('#profile_name');
    name.innerHTML = profileData.name;
    
    const job = document.querySelector('#profile_job');
    job.innerHTML = profileData.job;
    
    const location = document.querySelector('#profile_location');
    location.innerHTML = profileData.location;
    
    const phone = document.querySelector('#profile_phone');
    phone.innerHTML = profileData.phone;
    phone.href = `tel: ${profileData.phone}`;

    const email = document.querySelector('#profile_email');
    email.innerHTML = profileData.email;
    email.href = `mailto: ${profileData.email}`;

    const soft1 = document.querySelector('#soft1');
    soft1.innerHTML = profileData.skills.softSkills[0];

    const soft2 = document.querySelector('#soft2');
    soft2.innerHTML = profileData.skills.softSkills[1];

    const soft3 = document.querySelector('#soft3');
    soft3.innerHTML = profileData.skills.softSkills[2];

    const soft4 = document.querySelector('#soft4');
    soft4.innerHTML = profileData.skills.softSkills[3];
    
    const soft5 = document.querySelector('#soft5');
    soft5.innerHTML = profileData.skills.softSkills[4];
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})();