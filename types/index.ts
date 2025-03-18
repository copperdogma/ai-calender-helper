// Common type definitions for the project

export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  createdBy: string;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Database types
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

// Cache types
export interface CacheConfig {
  host: string;
  port: number;
  password?: string;
} 