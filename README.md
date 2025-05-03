# Countries Explorer

A modern React-based web application that allows users to explore country information, search by name, and filter by region and language. Includes login and session management using `localStorage`.

---

## Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-MalindiD.git
cd countries-explorer
```

2. Install Dependencies

```bash
npm install
```

3. Start the App

```bash
npm start
```

4. Testing

```bash
npm test
```

5. Hardcoded Credentials for Login

Email: malindi@gmail.com
Password: malindi123

### API Used

This app uses the REST Countries API v3.1:

/all – to get all countries

/name/{name} – to search countries

/region/{region} – to filter by region

/lang/{lang} – to filter by language

#### Challenges Faced

1. Dynamic Filtering
   Initially, language and region filters were hardcoded.

Fixed by dynamically extracting unique regions/languages from the API response.

2. Testing Axios + Jest
   Faced syntax issues due to ESM in Axios.

Solved by configuring jest.config.js and babel.config.js with transformIgnorePatterns.

3. Session Logic
   Needed a lightweight auth system without a backend.

Used localStorage for storing session state, enabling protected routing.
