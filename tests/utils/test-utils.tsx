import { render } from '@testing-library/react'
import { ReactElement } from 'react'

// Mock Next.js router
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
}

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  usePathname: () => '/',
}))

// Create a custom render function that includes providers
function customRender(ui: ReactElement) {
  return {
    ...render(ui),
    mockRouter,
  }
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render } 