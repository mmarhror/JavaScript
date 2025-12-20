let allheros = []; let currentData = []; let pageSize = 20;
let currentPage = 1;
let sortOrder = 'asc';
let sortColumn = '';
const prevBtn = document.getElementById('prevPage')
const nextBtn = document.getElementById('nextPage')
const select = document.querySelector('#select')
const headers = document.querySelectorAll('th[id]')
const searchInput = document.querySelector('input[type = "search"]')
const pagination = document.querySelector('#pagination')
const API_URL = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

// Fetches data from the API and initializes the table
const loadData = () => {
    fetch(API_URL).then((response) => response.json()).then((data) => {
        allheros = data
        currentData = data
        renderTable()
    })
        .catch((error) => { alert(error); })
}

// Renders the table rows based on the current page and data
const renderTable = () => {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ""

    let start = (currentPage - 1) * pageSize
    let end = start + pageSize

    const dataToShow = currentData.slice(start, end)

    dataToShow.forEach((hero) => {
        const rowHTML = `
            <tr>
                <td><img src="${hero.images.xs}" width="40"></td>
                <td>${hero.name}</td>
                <td>${check(hero.biography.fullName)}</td>
                <td>${check(hero.powerstats.combat)}</td>
                <td>${check(hero.powerstats.durability)}</td>
                <td>${check(hero.powerstats.intelligence)}</td>
                <td>${check(hero.powerstats.power)}</td>
                <td>${check(hero.powerstats.speed)}</td>
                <td>${check(hero.powerstats.strength)}</td>
                <td>${check(hero.appearance.race)}</td>
                <td>${check(hero.appearance.gender)}</td>
                <td>${check(hero.appearance.height[1])}</td>
                <td>${check(hero.appearance.weight[1])}</td>
                <td>${check(hero.biography.placeOfBirth)}</td>
                <td>${check(hero.biography.alignment)}</td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', rowHTML)
    });

    handleButtons()
    pagination.innerHTML = currentPage
}

// Validates and formats missing or empty data values
const check = (value) => {
    if (value === "" || value === null || value === undefined || value === "-" || parseInt(value) === 0) {
        return "-"
    }
    return value
}

// Handles the 'Previous' button click to go back one page
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        renderTable()
    }
})

// Handles the 'Next' button click to go forward one page
nextBtn.addEventListener('click', () => {
    currentPage++
    renderTable()
})

// Enables or disables pagination buttons based on the current page
const handleButtons = () => {
    if (currentPage === 1) {
        prevBtn.disabled = true
    } else {
        prevBtn.disabled = false
    }

    const lastPage = Math.ceil(currentData.length / pageSize)
    if (currentPage === lastPage) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
    }
}

// Updates the number of items shown per page
select.addEventListener('change', (val) => {
    const selectedValue = val.target.value

    if (selectedValue === 'all') {
        pageSize = allheros.length
    } else {
        pageSize = parseInt(selectedValue)
    }

    currentPage = 1
    renderTable()
})

// Filters the data based on the search input
searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase()
    currentData = allheros.filter((hero) => {
        return hero.name.toLowerCase().includes(searchValue)
    })
    currentPage = 1
    renderTable()
})

// Adds click listeners to table headers to trigger sorting
headers.forEach((th) => {
    th.addEventListener('click', () => {
        const columnId = th.id
        if (columnId === sortColumn) {
            sortOrder = (sortOrder === 'asc') ? 'desc' : 'asc'
            sortColumn = columnId
        } else {
            sortColumn = columnId
            sortOrder = 'asc'
        }
        sortData(columnId);
    })
})

// Retrieves and normalizes the value for a specific column (including unit conversion)
const getValue = (hero, column) => {
    if (column === 'name') return hero.name;
    if (column === 'full') return hero.biography.fullName;
    if (['combat', 'durability', 'intelligence', 'power', 'speed', 'strength'].includes(column)) {
        return hero.powerstats[column];
    }
    if (column === 'race') return hero.appearance.race;
    if (column === 'gender') return hero.appearance.gender;
    if (column === 'birth') return hero.biography.placeOfBirth;
    if (column === 'alignment') return hero.biography.alignment;

    if (column === 'height') {
        let val = hero.appearance.height[1];
        if (!val || val.includes("-")) return 0;
        val = val.replace(/,/g, '')
        let number = parseFloat(val);
        if (val.toLowerCase().includes('meters')) {
            return number * 100
        }
        return number
    }

    if (column === 'weight') {
        let val = hero.appearance.weight[1];
        if (!val || val.includes("-")) return 0;

        val = val.replace(/,/g, '');
        let number = parseFloat(val);

        if (val.toLowerCase().includes("tons")) {
            return number * 1000;
        }
        return number;
    }
    return null
}

// Sorts the current dataset based on the selected column and order
const sortData = (column) => {
    currentData.sort((a, b) => {
        let valA = getValue(a, column)
        let valB = getValue(b, column)

        const isMissingA = check(valA) === '-';
        const isMissingB = check(valB) === '-';


        if (isMissingA && !isMissingB) return 1;
        if (!isMissingA && isMissingB) return -1;
        if (isMissingA && isMissingB) return 0;


        if (typeof (valA) === 'number' && typeof (valB) === 'number') {
            return (sortOrder === 'asc') ? valA - valB : valB - valA
        }
        const strA = String(valA).toLowerCase();
        const strB = String(valB).toLowerCase();
        if (sortOrder === 'asc') {
            return strA.localeCompare(strB)
        } else {
            return strB.localeCompare(strA)
        }
    })

    currentPage = 1;
    renderTable();
}

loadData()