# Airport Search suggestion

This project is built using Next.js with TypeScript and Tailwind CSS. It features a search functionality that uses a custom `useDebounce` hook to debounce user input, preventing frequent API calls. Additionally, a rewrite rule is added in `next.config.js` to handle possible CORS errors.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Faraz1995/search-suggestion.git
    ```
2. Navigate to the project directory:
    ```bash
    cd yourproject
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Configuration

### Debounced Search

Implemented using a custom `useDebounce` hook to delay processing of user input, reducing the number of API calls.

### CORS Handling

Custom rewrite rules in `next.config.js` to manage CORS errors.

