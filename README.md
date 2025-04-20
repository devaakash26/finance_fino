# Finance Management Application

A comprehensive personal finance management application built with Next.js, featuring account management, transaction tracking, budgeting, and advanced financial analytics.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Testing Strategy](#testing-strategy)
- [Component Library](#component-library)
- [Authentication & Security](#authentication--security)
- [Performance Optimizations](#performance-optimizations)
- [Contributing](#contributing)

## Features

### Account Management
- Create and manage multiple financial accounts (checking, savings, credit cards)
- Set default accounts
- View account balances and transaction history
- Track spending patterns across accounts

### Transaction Management
- Add, edit, and delete transactions
- Categorize transactions
- Recurring transaction support
- Receipt scanning with AI analysis
- Bulk transaction operations

### Budgeting & Analytics
- Create and manage budget categories
- Track spending against budgets
- Visualize financial data with charts and graphs
- Financial insights and reports

### User Experience
- Responsive design for mobile and desktop
- Dark/light mode support
- Modern, clean UI with shadcn/ui components
- Real-time updates

## Project Structure

```
finance/
├── actions/            # Server actions (Next.js)
│   ├── accounts.js     # Account-related server actions
│   ├── transaction.js  # Transaction-related server actions
│   ├── budget.js       # Budget-related server actions
│   └── dashboard.js    # Dashboard data actions
├── app/                # Next.js application routes
│   ├── (auth)/         # Authentication routes
│   │   ├── sign-in/    # Sign in page
│   │   └── sign-up/    # Sign up page
│   ├── (main)/         # Main application routes
│   │   ├── dashboard/  # Dashboard page
│   │   ├── accounts/   # Account management
│   │   └── transaction/# Transaction management
│   └── lib/            # App-specific libraries
├── components/         # Reusable UI components
│   ├── ui/             # UI component library
│   └── [feature]/      # Feature-specific components
├── lib/                # Utility libraries
│   ├── prisma.js       # Database client
│   ├── arcjet.js       # Security integration
│   └── utils.js        # Helper functions
├── __tests__/          # Test files
│   ├── actions/        # Action tests
│   ├── components/     # Component tests
│   ├── integration/    # Integration tests
│   ├── performance/    # Performance tests
│   └── security/       # Security tests
└── public/             # Static assets
```

## Technology Stack

- **Frontend**: Next.js 14 (App Router), React, TailwindCSS
- **UI Components**: shadcn/ui component library
- **State Management**: React Hooks, Context API
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **Security**: ArcJet for rate limiting and security 
- **AI Features**: Google Gemini for receipt scanning
- **Testing**: Jest, React Testing Library
- **Styling**: TailwindCSS, CSS Modules

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- Clerk account for authentication
- Google Generative AI API key (for receipt scanning)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/finance.git
cd finance
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```
# Create a .env file with the following variables
DATABASE_URL="postgresql://username:password@localhost:5432/finance"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_API_KEY=your_google_api_key
```

4. Set up the database
```bash
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing Strategy

The application uses a comprehensive testing approach with Jest and React Testing Library, covering:

### Unit Tests
Unit tests focus on testing individual components, hooks, and utility functions in isolation.

- **Actions Tests**: Test server actions for accounts and transactions
  - Located in `__tests__/actions/`
  - Tests functions like `createTransaction`, `getAccountWithTransactions`

- **Component Tests**: Test UI components in isolation
  - Located in `__tests__/components/`
  - Tests both basic UI components (button, card) and complex components (account-card)

### Integration Tests
Integration tests verify that different parts of the application work together correctly.

- **Transaction Flow Tests**: Test the end-to-end flow of transactions
  - Located in `__tests__/integration/`
  - Tests creating, reading, updating, and bulk deleting transactions

### Performance Tests
Performance tests ensure the application maintains good performance under load.

- **Transaction Performance Tests**: Test performance of bulk operations
  - Located in `__tests__/performance/`
  - Tests creating 100 transactions and verifying execution time

### Security Tests
Security tests verify that the application's authentication and authorization mechanisms work correctly.

- **Auth Tests**: Test authentication and authorization
  - Located in `__tests__/security/`
  - Tests access control for accounts and transactions

### Testing Tools
- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities focusing on user behavior
- **Testing Methodologies**: 
  - Behavior-Driven Development (BDD)
  - Component testing with mocked dependencies
  - Snapshot testing for UI components
  - Mock services for external dependencies

### Running Tests
```bash
# Run all tests
npm test

# Run specific test suite
npm test -- __tests__/components/

# Run tests with coverage report
npm test -- --coverage
```

## Component Library

The application uses a custom component library built on top of shadcn/ui:

- **Button**: Various button styles (primary, secondary, outline, destructive)
- **Card**: Card components for displaying content
- **Form Controls**: Inputs, selects, checkboxes
- **Data Display**: Tables, badges, tooltips
- **Feedback**: Toast notifications, progress indicators
- **Navigation**: Menus, tabs, pagination
- **Layout**: Containers, grids, sections
- **Theme**: Dark/light mode support

Each component is thoroughly tested with React Testing Library to ensure proper rendering and behavior.

## Authentication & Security

### Authentication
- **Clerk Integration**: User authentication with Clerk
- **Protected Routes**: Server and client-side route protection
- **User Management**: Sign up, sign in, profile management

### Security
- **Rate Limiting**: ArcJet protection against abuse
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Input Validation**: Server-side validation of all inputs
- **Error Handling**: Secure error handling that doesn't leak sensitive information

## Performance Optimizations

- **Server Components**: Next.js server components for improved performance
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Response and data caching
- **Prefetching**: Route prefetching for faster navigation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
