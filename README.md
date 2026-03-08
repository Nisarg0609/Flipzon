# 🛒 Leegality Frontend Assessment
### Product Listing & Detail Page (Amazon)

An e-commerce product listing application built with React + Vite + Tailwind CSS, consuming the [DummyJSON](https://dummyjson.com) API.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
```bash
# Clone the repository
git clone [<repository-url>](https://github.com/Nisarg0609/Flipzon.git)
cd leegality-assessment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📌 Assumptions Made

- **All products fetched upfront** — DummyJSON has ~194 products. Fetching all at once allows accurate client-side filtering for brand and price, since the API has no server-side endpoints for these filters.

- **Price filter applies on button click** — intentional UX decision. Filtering on every keystroke would cause excessive re-renders and poor user experience for number inputs.

- **Brand list is dynamic** — brands are extracted from currently loaded products, not fetched separately. This means brand list updates automatically when a category is selected.

- **Multiple category selection** — when multiple categories are selected, parallel API calls are made for each and results are merged client-side.

- **Search filter** — searches by product title in real-time as the user types. Works in combination with all other filters.
---


## 🏗️ Architectural Decisions

### Feature-based Folder Structure
```
src/
├── components/               # Reusable generic UI
│   ├── CheckboxList.jsx
│   ├── FilterSection.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   └── Sidebar.jsx
├── context/
│   └── FilterContext.jsx      # Global filter state (FilterContext)
├── features/
│   └── Product/               # Product-specific components and hooks
│       ├── ProductCard.jsx
│       ├── ProductFilter.jsx
│       ├── ProductGrid.jsx
│       ├── useCategories.js
│       ├── useProduct.js
│       └── useProducts.js
└── pages/
    ├── ProductDetail.jsx
    └── ProductList.jsx
```

Grouping by feature rather than type makes the codebase easier to navigate as it grows. Product-related components, hooks, and logic all live together.

### Custom Hooks for Data Fetching
Data fetching is separated from UI into dedicated hooks:
- `useProducts(selectedCategories)` — fetches products, handles loading/error states
- `useProduct(id)` — fetches single product for detail page
- `useCategories()` — fetches category list once on mount

This keeps page components clean and makes hooks independently testable.

### FilterContext for State Persistence
Filter state lives in React Context (`FilterContext`) rather than local component state. This ensures filters survive navigation — when a user visits a product detail page and returns, all previously selected filters remain applied.

### Client-side Filtering with useMemo
Brand, price, and search filters are applied client-side using `useMemo`. This avoids unnecessary API calls and recalculates only when dependencies change, keeping filtering fast and efficient.

### Modern Routing with createBrowserRouter
Used `createBrowserRouter` (React Router v6.4+) instead of the older JSX-based `<BrowserRouter>` approach. This is the currently recommended pattern and supports future data loader integration.

---


## 🔮 Improvements Given More Time

1. **URL-synced filters** — store filters in URL query params so filters survive page refresh and can be shared via link

2. **Debounced search** — add debounce to search input to avoid filtering on every keystroke

3. **Sorting** — sort products by price (low to high / high to low) and rating

4. **Server-side pagination** — use API's `limit` and `skip` for default view instead of fetching all products upfront

5. **Skeleton loaders on detail page** — currently shows plain text "Loading...", could be improved with a skeleton layout

6. **Mobile responsive Layout** — sidebar could collapse into a drawer/modal on small screens
