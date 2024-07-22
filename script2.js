document.addEventListener('DOMContentLoaded', (event) => {
    const countryDropdown = document.getElementById('countryDropdown');
    const flagImage = document.getElementById('flag');

    const countryFlags = {
        us: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        ca: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
        gb: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
        fr: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        de: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
    };

    countryDropdown.addEventListener('change', () => {
        const selectedCountry = countryDropdown.value;
        if (countryFlags[selectedCountry]) {
            flagImage.src = countryFlags[selectedCountry];
            flagImage.alt = ${selectedCountry} flag;
        } else {
            flagImage.src = '';
            flagImage.alt = 'Flag will be displayed here';
        }
    });
});