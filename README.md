# Luxe Auction Portal

A scalable, responsive, and visually elegant auction portal built with React, Vite, and Tailwind CSS. This project features a modular architecture, a "Classic Luxury" design system, and is ready for backend integration.

## 🚀 Features

-   **Modular Architecture**: Organized into `components`, `features`, `pages`, `layouts`, `hooks`, and `data`.
-   **Classic Luxury Design**: Custom color palette (Ivory, Charcoal, Gold) and typography (Playfair Display, Inter).
-   **Fully Responsive**: Mobile-first design with complex grid layouts and responsive navigation.
-   **Accessibile**: Built with ARIA standards and keyboard navigation support.
-   **Interactivity**: Custom carousels, tabs, and hover effects.

## 📂 Project Structure

```
src/
├── components/          # Shared UI components
│   ├── features/        # Business-specific components (AuctionCard, etc.)
│   ├── home/            # Home page specific sections
│   └── ui/              # Reusable atomic elements (Button, Input, etc.)
├── data/                # Mock data and interfaces (Adapter pattern ready)
├── hooks/               # Custom React hooks (useAuctionStore, etc.)
├── layouts/             # Layout wrappers (Navbar, Footer, MainLayout)
├── pages/               # Route page components (Home, Listing, ItemDetail)
├── styles/              # Global styles and Tailwind configuration
└── utils/               # Helper functions
```

## 🛠️ Tech Stack

-   **Framework**: React 18 + Vite
-   **Styling**: Tailwind CSS (v4 CSS-based configuration)
-   **Icons**: Lucide React
-   **State Management**: Zustand
-   **Routing**: React Router DOM
-   **UI Primitives**: Radix UI (Dialog, Tabs)
-   **Carousel**: Embla Carousel

## 🏃‍♂️ Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🎨 Design System

The project uses a CSS-variable based theming system located in `src/styles/index.css`.

-   **Primary**: Charcoal (`#1E1E1E`)
-   **Background**: Ivory (`#FAFAF8`)
-   **Accent**: Antique Gold (`#B59A5A`)
-   **Typography**:
    -   Headings: *Playfair Display* (Serif)
    -   Body: *Inter* (Sans-serif)

## 🧩 Key Components

-   **`AuctionCard`**: Displays lot details, current bid, and countdown.
-   **`HeroCarousel`**: Full-width interactive slider for featured events.
-   **`Listing`**: Filtering and searching interface with active state visualization.
-   **`ItemDetail`**: Comprehensive product view with image gallery and bidding modal.
