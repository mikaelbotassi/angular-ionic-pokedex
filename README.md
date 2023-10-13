# angular-ionic-pokedex

My Pokédex is a web application that allows users to explore and manage their favorite Pokémon. It provides a user-friendly interface with three main features:

## 1. Favorites List
Users can easily add and remove their favorite Pokémon to a personalized list. The favorites list is accessible from the navigation menu, making it simple to keep track of the Pokémon you love the most.

## 2. Pokémon Listing
The application offers a comprehensive listing of Pokémon, including details like name, type, and a brief description. Users can search for specific Pokémon using the search bar to quickly find the information they need.

## 3. Pokémon Details
When a user clicks on a Pokémon card in the list, they are presented with detailed information about that specific Pokémon. This includes stats, abilities, and more. It's the perfect way to learn more about your favorite Pokémon.

## Methodology
In this project, a systematic approach was followed to create a Pokédex application with a list of favorites, a comprehensive Pokémon listing, and detailed views when clicking on a Pokémon card. The methodology can be summarized in the following steps:

### Project Setup

The development environment was set up, including Node.js for package management and the Ionic CLI for project management.
The project repository was created and configured on a version control platform like GitHub.
### UI/UX Design
The project's user interface (UI) and user experience (UX) were designed to create an appealing and user-friendly Pokédex.

### Development
The Pokédex application was developed using Ionic, Angular, and other necessary technologies.
Features such as searching, favoriting, and displaying detailed Pokémon information were implemented.
Testing and Debugging:

Extensive testing was carried out to ensure the functionality and stability of the application.
Unit tests were performed to catch and address any issues.

### Favorite Management
A service was created to manage user favorites, allowing users to add and remove Pokémon from their favorites list.
Favorites were stored in local storage for persistent data retention.

### Data Integration
The application integrated with the PokéAPI to fetch Pokémon data for display.
Requests to the API were made using HTTP services, and responses were processed to present Pokémon information effectively.

### Customization and Future Enhancements

The project was structured to be easily customizable, allowing for future enhancements and feature additions.

## Installing Node.js

Before you can run the project, you'll need to have Node.js installed on your computer. Here's how to download Node.js based on your operating system:

### Windows

You can download Node.js for Windows from the official website: [Node.js for Windows](https://nodejs.org/)

### macOS

For macOS users, Node.js can be downloaded from the official website: [Node.js for macOS](https://nodejs.org/)

### Linux

Linux users can typically install Node.js using their package manager. For example, on Ubuntu, you can run the following command to install Node.js:

```bash
sudo apt-get install nodejs
```
## Installing Angular CLI (Command Line Interface)


Angular CLI is a powerful tool that simplifies various development tasks. To install Angular CLI for your project, follow these steps:

Open your terminal or command prompt.

Run the following command to install Angular CLI globally on your system:

```bash
npm install -g @angular/cli
```

Wait for the installation to complete. Once it's done, you can verify the installation by running:
```bash
ng version
```

This should display the installed Angular CLI version.

Now you're ready to use Angular CLI to simplify your development tasks, such as generating components, services, modules, and more.

## Installing Ionic CLI (Command Line Interface)


Ionic CLI is a powerful tool that simplifies various development tasks. To install Ionic CLI for your project, follow these steps:

Open your terminal or command prompt.

Run the following command to install Ionic CLI globally on your system:

```bash
npm install -g @ionic/cli
```

Wait for the installation to complete. Once it's done, you can verify the installation by running:
```bash
ionic version
```

This should display the installed Ionic CLI version.

Now you're ready to use Ionic CLI to simplify your development tasks, such as generating components, services, modules, and more.

## Getting Started

If you want to clone and run this project locally, follow these steps:

1. Clone this repository to your local machine using the `git clone` command.

2. Navigate to the project directory `./pokedex`

3. Install project dependencies with `npm install`.

4. Run the project with `ionic serve`.
   1. If you run `ionic serve` and encounter the following error: `ionic: The file 'file_path' cannot be loaded because running scripts is disabled on this system`
   2. Open a Shell as an administrator.
   3. Run the command `Get-ExecutionPolicy`; it should return `Restricted`.
   4. Run the command `Get-ExecutionPolicy`; it should return `Restricted`.
   5. Finally, run `ionic serve`.

5. Open your browser and go to `http://localhost:8100/` to see the application in action.

## Project Structure

The project has been organized to facilitate understanding and maintenance. The main structure is as follows:

- `src/`: The root directory of the project source code.
  - `assets/`: Contains static files such as images, and fonts.
  - `app/`: The main application folder.
    - `pages/`: Contains the main pages of the application.
    - `shared/`: Includes shared components throughout the application.
    - `components/`: Contains reusable components throughout the application.
    - `models/`: Place for data model definitions.
    - `services/`: Stores services for business logic.
    - `app-routing.module.ts`: Application routing configuration.
    - `app.component.ts`: Root component of the application.
  
  - `app.module.ts`: Main application module configuration.

### Pages

Inside the `pages/` folder, you will find the main pages of the application. Each page may have its own folder structure, including specific components, services, and models.

### Components

The `components/` folder is where reusable components are stored. This promotes code reuse throughout the application.

### Services

The `services/` folder contains services for business logic. This helps maintain separation of concerns and makes the code more modular.

## Running unit tests
A good way to analyze what components and services should do is to check the unit tests. Use the command:
`ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

Run `ionic generate component component-name` to generate a new component. You can also use `ionic generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ionic build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, follow the contribution guidelines and submit a pull request. We'll be happy to review and merge your contributions.

Enjoy using the application and exploring the source code!
