/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: theme => ({
        interTight: ['InterTight-Regular0'],
      }),
    }
  },
  plugins: []
};
