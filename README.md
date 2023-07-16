# Plant Identification and Health Assessment App

This is a React application that allows users to identify plants and assess plant health by uploading images of the plants. The application interacts with the Plant.id API to provide these services. This application also allows users to view the history of previous results.

The application is built using React and TypeScript and TailwindCSS.

## Features

-   Drag and Drop images
-   Identify plants based on the uploaded images
-   Assess plant health based on the uploaded images
-   Display history of previous results

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local system:

-   Node.js
-   npm
-   Git

### Installation

1. Clone the repo:

```
git clone https://github.com/username/projectname.git
```

2. Install NPM packages:

```
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory and set up your environment variables. An example configuration can be seen in the `.env.example` file.

For example:

```
VITE_PLANTID_APIKEY = YOUR_PLANTID_APIKEY
```

Replace `YOUR_PLANTID_APIKEY` with your actual API key for the Plant.id service.

### Running the Application

After installing the dependencies and setting up your environment variables, you can run the application using the following command in your terminal:

```
npm run dev
```

The application will run on `localhost:5173` in your browser.

## Acknowledgments

Thanks to the Plant.id API for providing the services for plant identification and health assessment.
