# PM Tool - React App

A modern React application for project management, built with Vite, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Stack**: Built with React 18, TypeScript, and Vite
- 🎨 **Beautiful UI**: Styled with Tailwind CSS and custom components
- 🔐 **Authentication**: Complete auth system with context
- 📱 **Responsive**: Mobile-first design with responsive navigation
- 🔗 **Integrations**: Support for Azure DevOps, Jira, and more
- 🤖 **AI Assistant**: Built-in chatbot for project assistance
- 📊 **Dashboard**: Real-time project statistics and metrics

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: React Context API

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── TopNav.tsx      # Top navigation bar
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Login.tsx       # Authentication page
│   ├── Integrations.tsx # Integration management
│   └── Chatbot.tsx     # AI assistant
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── assets/             # Static assets
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the ReactApp directory:
   ```bash
   cd ReactApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=PM Tool
```

### Tailwind CSS

The app uses Tailwind CSS with custom configuration. You can modify the design system in `tailwind.config.js`.

### Vite Configuration

The Vite configuration includes:
- React plugin
- TypeScript support
- API proxy for development
- Custom port configuration

## Features Overview

### Dashboard
- Project statistics and metrics
- Recent activity feed
- Quick action buttons
- Responsive grid layout

### Authentication
- Login form with validation
- Context-based auth state
- Token management
- Protected routes

### Integrations
- Azure DevOps connection
- Jira integration
- GitHub linking
- Slack notifications

### AI Assistant
- Real-time chat interface
- Quick action suggestions
- Message history
- Typing indicators

## Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Sidebar.tsx`

### Styling

The app uses Tailwind CSS with custom utility classes:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card container style
- `.input-field` - Form input style

### State Management

The app uses React Context for global state:
- `AuthContext` - Authentication state
- Future contexts can be added for other global state

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Environment Setup

Make sure to set the correct environment variables for production:
- `VITE_API_BASE_URL` - Your production API URL
- `VITE_APP_NAME` - Application name

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 