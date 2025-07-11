# Orchestra Website - replit.md

## Overview

This is a full-stack web application for "ilPlettro", an Italian mandolin orchestra and music school. The application serves as a comprehensive website showcasing the orchestra's history, members, upcoming events, media gallery, and contact information. It features a modern, responsive design with smooth scrolling navigation and an elegant Italian-inspired aesthetic.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development Setup**: Vite middleware for hot module replacement

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Schema (shared/schema.ts)
- **Members**: Orchestra member profiles with instruments, sections, and photos
- **Events**: Concert and event information with dates, venues, and posters
- **Media Items**: Audio, photo, and video content with metadata
- **Sections**: Orchestra sections (direttore, chitarre, mandolini, mandole, contrabbassi)

### API Endpoints (server/routes.ts)
- `GET /api/members` - All orchestra members
- `GET /api/members/section/:section` - Members by instrument section
- `GET /api/events` - All events
- `GET /api/events/upcoming` - Future events
- `GET /api/events/past` - Historical events
- `GET /api/media` - Media items
- `GET /api/media/type/:type` - Media by type (audio/photo/video)

### Frontend Pages & Components
- **Home Page**: Single-page application with smooth scrolling sections
- **Hero Section**: Full-screen landing with background image
- **Storia Section**: Orchestra history and mission
- **Membri Section**: Member profiles organized by instrument sections
- **Eventi Section**: Upcoming and past events with calendar integration
- **Media Section**: Audio player, photo gallery, and video content
- **Contatti Section**: Contact form and social media links

### Storage Strategy
- **Development**: In-memory storage with pre-populated sample data
- **Production**: PostgreSQL database with Drizzle ORM
- **File Storage**: Image URLs pointing to external services (Unsplash for demo)

## Data Flow

### Client-Server Communication
1. **Query Management**: TanStack Query handles API calls, caching, and state synchronization
2. **Error Handling**: Centralized error handling with user-friendly toast notifications
3. **Loading States**: Skeleton components provide smooth loading experiences
4. **Form Handling**: React Hook Form with Zod validation for contact forms

### Database Operations
1. **Schema Definition**: Drizzle schema with PostgreSQL types
2. **Migrations**: Automated database schema versioning
3. **Query Building**: Type-safe database queries with Drizzle ORM
4. **Connection Management**: Neon serverless database with connection pooling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESLint/Prettier**: Code quality and formatting
- **Drizzle Kit**: Database migration and introspection tools

### External Services
- **Unsplash**: Stock photography for demo content
- **Google Fonts**: Playfair Display and Inter font families
- **Calendar APIs**: Google Calendar and Apple Calendar integration

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles Express server to single file
3. **Database Setup**: Drizzle migrations ensure schema consistency
4. **Environment Variables**: DATABASE_URL and other configuration

### Production Configuration
- **Server**: Single Node.js process serving API and static files
- **Database**: Neon PostgreSQL with connection pooling
- **Static Assets**: Served directly from Express in production
- **Error Handling**: Comprehensive error boundaries and logging

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage
- **Production**: Compiled assets, PostgreSQL database, optimized builds
- **Environment Detection**: NODE_ENV-based configuration switching

### Performance Considerations
- **Code Splitting**: Dynamic imports for optimal bundle sizes
- **Image Optimization**: Responsive images with proper sizing
- **Caching**: Query caching and HTTP cache headers
- **Bundle Analysis**: Vite bundle analyzer for optimization insights