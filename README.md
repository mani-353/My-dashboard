# My Dashboard

Welcome to the My Dashboard project! This is a dynamic and responsive dashboard page built using Vite+React, allowing users to add or remove widgets dynamically.

## Features

- **Dynamic Widget Management**: Users can add or remove widgets on the dashboard as needed.
- **Data Representation**: Each widget represents data using graphical representations like pie charts, bar graphs, and line charts.
- **Customizable**: Although this project uses default data for assignment purposes, in a real-world application, users would provide their own data for each widget.

## Use Cases of Dashboards

Dashboards are essential in web applications for:

- **Data Visualization**: Dashboards provide a visual representation of key metrics, making it easier for users to understand complex data at a glance.
- **Real-Time Monitoring**: Dashboards can display live data, allowing users to monitor critical information in real-time.
- **Decision Making**: By presenting data in an organized manner, dashboards help users make informed decisions quickly.

## Project Details

For this assignment, I created a JSON file named `widgetdata.json` to store the widget data. The dashboard has three categories, each with its own graphical representation. Users can dynamically add widgets by selecting from pie charts, bar graphs, and line charts, and provide custom text for the widget. In a real-world scenario, users would also input their data.

## Folder Structure
```bash
The project structure is as follows:
My-dashboard/
│
├── public/
│ └── index.html # Entry point of the application
│
├── src/
│ ├── components/ # Contains reusable components
│ ├── redux/ # State management using Redux
│ ├── styles/ # CSS styles
│ ├── widgetdata.json # JSON file containing widget data
│ ├── App.jsx # Main application component
│ ├── App.css # Main application CSS
│ ├── index.css # Global CSS styles
│ └── main.jsx # Entry point for React/Vite
│
└── package.json # Project dependencies and scripts
```
## Getting Started

### Prerequisites

To run this project, you'll need to have Node.js and npm installed on your machine. If you don't have them installed, follow these steps:

 **Install Node.js and npm**:
   - Download and install Node.js from the official website: [Node.js](https://nodejs.org/)
   - npm (Node Package Manager) is included with Node.js, so you don't need to install it separately.

### Installation

Follow the steps below to clone the repository, install dependencies, and run the application locally.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mani-353/My-dashboard.git 
2. **Navigate to the Project Directory**:
   ```bash
    cd My-dashboard 
3. **Install Dependencies**:
All the necessary dependencies for the project are listed in the package.json file. To install them, run:
    ```bash
    npm install 
4. **Run the Application**:
To start the application locally using Vite, run:
   ```bash 
        npm run dev
5. **Access the Application**:
Once the development server is up and running, you can access the application in your web browser at http://localhost:5173/.

# Development
If you want to customize or extend the project, all the main files are located in the src directory. Components, state management, styles, and JSON data are organized into respective folders to make development easy and structured.
