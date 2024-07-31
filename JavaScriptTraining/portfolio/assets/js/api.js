async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/PabloLeaoDev/DIO/main/JavaScriptTraining/portfolio/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}