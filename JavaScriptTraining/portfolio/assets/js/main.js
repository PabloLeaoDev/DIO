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

function updateSoftSkills(profileData) {
    const softSkills = document.querySelector('#softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.querySelector('#hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const langs = document.querySelector('#langs');
    langs.innerHTML = profileData.languages.map(lang => `<li>${lang}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.querySelector('#portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => `<li><h3 class="tittle github">${project.name}</h3><a href="${project.url}" target="_blank">${project.url}</a></li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData)
})();