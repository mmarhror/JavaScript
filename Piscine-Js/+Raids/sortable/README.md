# Sortable Superheroes Table

A dynamic, searchable, and sortable table displaying superheroes data fetched from the [Superhero API](https://akabab.github.io/superhero-api/api/). This project allows users to:

- Search superheroes by name
- Sort table columns in ascending/descending order
- Navigate through paginated data
- Adjust the number of rows displayed per page

## Features

- **Searchable:** Filter superheroes instantly as you type.
- **Sortable:** Click on column headers to sort by name, power stats, appearance, or biography.
- **Pagination:** Easily navigate between pages using next/previous buttons.
- **Responsive Display:** Supports dynamic page size selection, including viewing all rows at once.
- **Data Validation:** Handles missing or invalid data gracefully.

## Project Structure

```
.
├── index.html # Main HTML file
├── style.css # Styles for table and layout
├── media
│ ├── html_table.jpg # Screenshot of the table (optional)
│ └── search.png # Search icon used in the table header
└── src
└── sortable.js # Main JavaScript logic for fetching, rendering, sorting, and pagination
```

## Usage

Open `index.html` in a web browser.
