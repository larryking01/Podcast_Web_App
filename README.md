# Podcast Web App

## Description

This is a web application designed to manage and display podcast-related content. It includes an administrative interface for managing confessions, episodes, playlists, and team members, as well as a public-facing interface for users to view this content.

## Features

### Admin Features:
*   **Dashboard:** Overview of application statistics and key information.
*   **Confessions Management:** View, add, edit, and delete confessions.
*   **Episodes Management:** View, add, edit, and delete episodes.
*   **Playlists Management:**
    *   Create new playlists.
    *   View existing playlists.
    *   Edit playlist details.
    *   Delete playlists.
    *   View individual playlist details.
*   **Team Management:**
    *   Add new team members.
    *   View existing team members.
    *   Edit team member details.
    *   View team member details.
*   **Authentication:** Secure login for administrators.

### Public Features:
*   **Home Page:** Landing page for the application.
*   **Episodes:** Browse and view podcast episodes.
*   **Episode Details:** View detailed information about a specific episode.
*   **Playlists:** Browse and view available playlists.
*   **Team Members:** View information about the podcast team.
*   **Confessions:** View user-submitted confessions.
*   **Not Found:** Page for handling 404 errors.

## Screenshots

### Home screen

![Admin Dashboard](/screenshots/1.png)

### Playlists
![Admin Dashboard](/screenshots/2.png)

### Playlist details

![Admin Dashboard](/screenshots/3.png)

## Authors

*   **[Larry Williams]** 
*   **[Faisal Halid Dene]** 
*   



## Technologies Used

*   **Angular:** A platform for building mobile and desktop web applications.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **SCSS:** A CSS preprocessor for more organized and maintainable styling.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/larryking01/Podcast_Web_App
    cd podcast-web-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Serve the application:
    ```bash
    ng serve
    ```
    The application will be available at `http://localhost:4200/` by default.

## Usage

*   **Admin Access:** Navigate to `/admin` to access the administrative dashboard. Use the provided credentials to log in.
*   **Public Access:** Explore the public-facing sections of the application to view episodes, playlists, and team information.
