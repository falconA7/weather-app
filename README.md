# React World Weather

A simple weather lookup app built with **React 19**, **TypeScript**, and **Vite**.
Search by city name to see the current temperature and conditions, powered by the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search current weather by city name
- Displays country, city, temperature (°C), condition, and a weather icon
- Quick-access favorite cities (London, Tokyo, New York)
- Built with strict TypeScript types and a component-based structure

## Tech Stack

- React 19
- TypeScript
- Vite
- [lucide-react](https://lucide.dev/) (icons)
- OpenWeatherMap API

## Project Structure

```
src/
├── App.tsx               # Root component, holds state and fetch logic
├── main.tsx              # Entry point
├── index.css             # Global styles (BEM-style class names)
└── components/
    ├── Title.tsx         # App heading
    ├── Form.tsx          # City input form
    ├── Results.tsx       # Weather result display
    └── Favorites.tsx     # Favorite city shortcut buttons
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- An OpenWeatherMap API key ([sign up here](https://home.openweathermap.org/users/sign_up))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd weather-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root based on `.env_example`:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

> Note: Vite requires environment variables exposed to the client to be prefixed with `VITE_`.

### Run the App

```bash
# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## How It Works

1. The user enters a city name in the form (or clicks a favorite button).
2. `App.tsx` calls the OpenWeatherMap API using the `VITE_WEATHER_API_KEY`.
3. The response is stored in state and rendered by the `Results` component.

## License

This project is for learning purposes.