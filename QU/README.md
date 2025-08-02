# AI-Powered Customer Support Portal

## Overview
This project is an AI-Powered Customer Support Portal frontend application built with React. It integrates with Firebase for authentication and data management, providing a seamless experience for users seeking support.

## Features
- User authentication (login and registration)
- Chat interface for real-time support
- Dashboard for viewing support tickets and statistics
- Responsive design with a modern UI

## Technologies Used
- React
- Firebase
- Vite
- CSS

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/customer-support-portal.git
   ```
2. Navigate to the project directory:
   ```
   cd customer-support-portal
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Directory Structure
- `src/components`: Contains all React components organized by feature.
- `src/contexts`: Contains context providers for managing global state.
- `src/hooks`: Contains custom hooks for reusable logic.
- `src/services`: Contains service files for Firebase and AI interactions.
- `src/styles`: Contains global styles.
- `src/utils`: Contains utility functions and constants.

## License
This project is licensed under the MIT License.