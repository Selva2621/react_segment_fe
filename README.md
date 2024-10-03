<h1>React Segment Management App</h1>

<p>
    The <strong>React Segment Management App</strong> is a modern web application built using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>PrimeReact</strong>, and <strong>Tailwind CSS</strong> for efficient segment management. It provides a highly responsive and customizable user experience, allowing users to create, edit, and manage segments with ease.
</p>

<h2>Key Features</h2>
<ul>
    <li><strong>Next.js Framework:</strong> Offers server-side rendering and efficient static generation for a seamless user experience.</li>
    <li><strong>TypeScript Support:</strong> Ensures type safety, better code maintainability, and early detection of errors.</li>
    <li><strong>PrimeReact Components:</strong> Provides a wide range of pre-built, customizable UI components.</li>
    <li><strong>Tailwind CSS:</strong> Enables utility-first styling, allowing for fast and responsive design.</li>
    <li><strong>Responsive Design:</strong> Adapts seamlessly to different screen sizes and devices.</li>
</ul>

<p>More information about the project and its usage can be found in the documentation.</p>

<h2>Installation & Updates</h2>

<h3>Prerequisites</h3>
<p>Ensure you have the following installed on your machine:</p>
<ul>
    <li>Node.js (version 16 or higher)</li>
    <li>npm (version 7 or higher) or Yarn for package management</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/selvasivam/react_segment_fe.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd react_segment_fe</code></pre>
    <li>Install the required dependencies:</li>
    <pre><code>npm install</code></pre>
    <pre><code>or if you're using Yarn:</code></pre>
    <pre><code>yarn install</code></pre>
</ol>

<h3>Updating the Project</h3>
<p>To update the project with the latest changes, run:</p>
<pre><code>npm update</code></pre>
<pre><code>or</code></pre>
<pre><code>yarn upgrade</code></pre>

<h2>Setup</h2>
<ol>
    <li>Start the development server:</li>
    <pre><code>npm run dev</code></pre>
    <pre><code>or</code></pre>
    <pre><code>yarn dev</code></pre>
    <p>The application will be available at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
</ol>

<h2>Project Structure</h2>
<pre><code>
next-segment-app/
│
├── public/
│   └── favicon.ico
│
└── src/
    ├── app/
    │   └── page.jsx         # Main page file
    │
    ├── components/
    │   ├── SchemaPopup.jsx   # Popup component for segment
    │   ├── SchemaDropdown.jsx # Dropdown component
    │   └── SchemaPopupLogic.ts # Logic for the Schema Popup
    │
    ├── styles/
    │   ├── globals.css       # Global styles
    │   └── SchemaPopup.module.css # Styles for the Popup
    │
    └── utils/
        ├── api.ts            # API functions
        └── routes.ts         # Route configurations
</code></pre>

<h2>Important Changes with the Public Folder</h2>
<p>All static assets such as images and favicons are stored in the <strong>public</strong> folder. Ensure you configure any server or hosting environment to use this folder for serving static assets.</p>

<h2>Images Used in the Project</h2>
<p>These images illustrate the segment creation process, integration of PrimeReact components, and usage of Tailwind CSS in the application.</p>

<h2>Styling with Tailwind CSS</h2>
<p>Tailwind CSS is used for the styling of the project, enabling a utility-first approach. You can customize the design by editing <code>tailwind.config.js</code> and applying Tailwind classes directly in your JSX files. For more advanced customizations, use the styles defined in the <code>src/styles</code> folder.</p>

<h2>Integration with PrimeReact</h2>
<p>PrimeReact components are used throughout the application for building UI elements like buttons, dropdowns, tables, and more. Ensure you refer to the <strong>PrimeReact Documentation</strong> for further customization.</p>

<h2>How to Use the Application</h2>
<ul>
    <li><strong>Create Segments:</strong> Use the provided UI to add, edit, or delete segments.</li>
    <li><strong>Dropdown Management:</strong> Customize dropdown values using <code>SchemaDropdown.jsx</code>.</li>
</ul>

<h3>Configuration</h3>
<ul>
    <li>Tailwind CSS is already set up and integrated. You can adjust your styles using Tailwind's utility classes.</li>
    <li>PrimeReact components have been imported and used across different parts of the project, specifically in <code>SchemaPopup.jsx</code> and other component files.</li>
</ul>

<h3>Setting Up Tailwind CSS with Next.js</h3>
<p>Tailwind CSS has been configured in this project. If you're new to it, make sure the following files are correctly set up:</p>
<ul>
    <li><code>tailwind.config.js</code>: Configuration file for customizing Tailwind.</li>
    <li><code>postcss.config.js</code>: Tailwind requires PostCSS configuration.</li>
</ul>
<p>For detailed setup, refer to the <strong>Tailwind CSS Documentation</strong>.</p>

<h2>Server Requirements</h2>
<p>This project requires the following to run effectively:</p>
<ul>
    <li>Node.js version 16 or higher.</li>
    <li>npm or Yarn for managing dependencies.</li>
</ul>

<h2>Next.js Configuration</h2>
<p>Make sure to configure your server or hosting to point to the public folder for static files. The main entry point for the application is <code>src/app/page.jsx</code>.</p>

<h2>Contribution Guidelines</h2>
<p>If you'd like to contribute to this project:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch:
        <pre><code>git checkout -b feature-branch-name</code></pre>
    </li>
    <li>Commit your changes:
        <pre><code>git commit -m 'Add some feature'</code></pre>
    </li>
    <li>Push to the branch:
        <pre><code>git push origin feature-branch-name</code></pre>
    </li>
    <li>Open a Pull Request.</li>
</ol>

<h2>References</h2>
<ul>
    <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
    <li><a href="https://www.primefaces.org/primereact/showcase/#/">PrimeReact Documentation</a></li>
    <li><a href="https://tailwindcss.com/docs">Tailwind CSS Documentation</a></li>
    <li><a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a></li>
</ul>
