
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

    const hard1 = document.querySelector('#hard1');
    hard1.src = profileData.skills.hardSkills[0].logo;
    hard1.alt = profileData.skills.hardSkills[0].name;
    hard1.title = profileData.skills.hardSkills[0].name;

    const hard2 = document.querySelector('#hard2');
    hard2.src = profileData.skills.hardSkills[1].logo;
    hard2.alt = profileData.skills.hardSkills[1].name;
    hard2.title = profileData.skills.hardSkills[1].name;
    
    const hard3 = document.querySelector('#hard3');
    hard3.src = profileData.skills.hardSkills[2].logo;
    hard3.alt = profileData.skills.hardSkills[2].name;
    hard3.title = profileData.skills.hardSkills[2].name;

    const hard4 = document.querySelector('#hard4');
    hard4.src = profileData.skills.hardSkills[3].logo;
    hard4.alt = profileData.skills.hardSkills[3].name;
    hard4.title = profileData.skills.hardSkills[3].name;

    const lang1 = document.querySelector('#lang1');
    lang1.innerHTML = profileData.languages[0];

    const lang2 = document.querySelector('#lang2');
    lang2.innerHTML = profileData.languages[1];
    
    const lang3 = document.querySelector('#lang3');
    lang3.innerHTML = profileData.languages[2];
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})();