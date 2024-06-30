AuthApp structure
│
├── src
|   |
    ├── puplic
│   │   ├── index.html
│   │   ├── sitemap.xml
│   │   │  
│   │   └──  robots 
│   │       
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Auth
│   │   │   └── Login.js
│   │   └── cache
│   │       └── CachedDate.js
│   │
│   ├── hocks
│   │   └── Usecache.js
│   │
│   ├── pages
│       ├── _app.js
│       ├── index.js
│       ├── login.js
│       └── posts.js
│
└── package.json

Folder and File Descriptions
components: Contains reusable components.

Navbar.js: The navigation bar component.
Auth: Contains authentication-related components.
Login.js: The login form component.
cache: Contains caching-related components.
CachedDate.js: Manages cached data display.
hocks: Contains custom hooks.

Usecache.js: Custom hook for caching logic.
pages: Contains Next.js pages, responsible for routing.

_app.js: Custom App component to initialize pages.
index.js: The main landing page.
login.js: The login page.
posts.js: Page displaying posts.


Scripts

dev: Runs the app in development mode. => npm run dev


build: Builds the app for production.=> npm run build


start: Runs the built app in production mode. => npm start



Dependencies
React: JavaScript library for building user interfaces.
Next.js: React framework for server-side rendering and static site generation.
MUI (Material-UI): React component library for faster and easier web development.
Formik: Form library for React.
Yup: JavaScript schema builder for value parsing and validation.



node v 20 
react v 18
next js v 14 







