import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: { scrollBehavior: ["responsive", "smooth"] },
  },
  plugins: [flowbite.plugin()],
};

export default config;
