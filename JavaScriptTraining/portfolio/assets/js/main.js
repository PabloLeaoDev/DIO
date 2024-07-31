
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
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})();