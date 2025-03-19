import { render, screen } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import UserProfile from '../../../components/auth/UserProfile'
import { User } from 'firebase/auth'

type AuthStateCallback = (user: User | null) => void

// Mock Firebase auth
jest.mock('../../../lib/firebase', () => {
  const mockAuth = {
    currentUser: null,
    onAuthStateChanged: jest.fn(),
  }

  return {
    auth: mockAuth,
  }
})

const mockFirebase = jest.requireMock('../../../lib/firebase')

describe('UserProfile', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockFirebase.auth.currentUser = null
  })

  it('renders loading state before auth is determined', () => {
    mockFirebase.auth.onAuthStateChanged.mockImplementation((callback: AuthStateCallback) => {
      // Don't call the callback to simulate loading state
      return () => {}
    })

    render(<UserProfile />)
    
    // Test for loading state presence, not specific implementation
    expect(screen.getByTestId('profile-loading')).toBeInTheDocument()
  })

  it('renders authenticated user information correctly', () => {
    const mockUser = {
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'https://example.com/photo.jpg'
    } as User

    mockFirebase.auth.onAuthStateChanged.mockImplementation((callback: AuthStateCallback) => {
      callback(mockUser)
      return () => {}
    })

    render(<UserProfile />)

    // Test for presence of user information
    const profileImage = screen.getByRole('img', { name: /profile/i })
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(mockUser.photoURL!)))

    // Test for display name and email presence, not exact text
    expect(screen.getByTestId('profile-name')).toHaveTextContent(mockUser.displayName!)
    expect(screen.getByTestId('profile-email')).toHaveTextContent(mockUser.email!)
  })

  it('handles missing user information gracefully', () => {
    const mockUser = {
      displayName: null,
      email: null,
      photoURL: null
    } as User

    mockFirebase.auth.onAuthStateChanged.mockImplementation((callback: AuthStateCallback) => {
      callback(mockUser)
      return () => {}
    })

    render(<UserProfile />)

    // Test fallback behavior
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByTestId('profile-name')).toHaveTextContent(/anonymous/i)
    expect(screen.getByTestId('profile-email')).toHaveTextContent(/no email/i)
  })
}) 