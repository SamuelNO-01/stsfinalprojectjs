// script.js

const countries = [
    { name: "Afghanistan", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
    { name: "Åland Islands", flag: "https://flagcdn.com/w320/ax.png" },
    { name: "Albania", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "American Samoa", flag: "https://flagcdn.com/w320/as.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Anguilla", flag: "https://flagcdn.com/w320/ai.png" },
    { name: "Antarctica", flag: "https://flagcdn.com/w320/aq.png" },
    { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Aruba", flag: "https://flagcdn.com/w320/aw.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Austria", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bermuda", flag: "https://flagcdn.com/w320/bm.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivia (Plurinational State of)", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bonaire, Sint Eustatius, and Saba", flag: "https://flagcdn.com/w320/bq.png" }
];

const grid = document.getElementById("countryGrid");

// Function to generate country cards
function displayCountries() {
    grid.innerHTML = ""; // Clear previous results

    countries.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${country.flag}" alt="${country.name} Flag">
            <h2>${country.name}</h2>
        `;

        grid.appendChild(card);
    });
}

// Display all countries on load
displayCountries();
