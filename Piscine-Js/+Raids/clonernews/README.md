# ClonerNews

A web application that fetches and displays Hacker News posts, jobs, and polls in real-time.  
The app supports live updates, comment loading, and paginated post rendering.

## Features

- **Fetch & Display:** Retrieves stories, jobs, and polls from Hacker News API.
- **Live Updates:** Automatically detects new posts and comments every 5 seconds.
- **Debounced Comment Loading:** Click to view comments without overloading the server.
- **Pagination:** Loads posts in batches and supports "Load More" functionality.
- **Post Types:** Handles stories, jobs, and polls with proper formatting and meta information.
- **Notifications:** Displays the number of new posts and comments dynamically.

## Project Structure

```
.
├── index.html # Main HTML page
├── style.css # Styling for posts, notifications, and layout
├── src
│ ├── comments.js # Handles fetching, rendering, and attaching comments
│ ├── main.js # Core logic for fetching posts, filtering, and rendering
│ └── updates.js # Manages live updates and notifications
```

## Usage

1. Open `index.html` in a web browser.
