import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3366FF',
        'white-50': '#FAFBFF',
        'neutral-75': '#F3F5F8'
      },
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  // plugins: [require("daisyui")],
}
export default config
