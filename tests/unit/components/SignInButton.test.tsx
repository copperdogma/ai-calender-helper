// Mock modules directly in place
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: null
  })),
  signInWithPopup: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(() => ({
    addScope: jest.fn()
  }))
}));

jest.mock('../../../lib/firebase', () => ({
  auth: {
    currentUser: null
  },
  app: {}
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

// Import after mocks
import { render, screen, fireEvent, waitFor } from '../../utils/test-utils';
import '@testing-library/jest-dom';
import SignInButton from '../../../components/auth/SignInButton';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../lib/firebase';

// Mock user data
const mockUser = {
  displayName: 'Test User',
  email: 'test@example.com',
  uid: 'test-user-id',
  getIdToken: jest.fn().mockResolvedValue('mock-id-token')
};

describe('SignInButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset auth state
    (auth as any).currentUser = null;
    
    // Mock fetch for API calls
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ status: 'success' })
    });
  });

  it('shows authentication button in correct state when not authenticated', () => {
    render(<SignInButton />);
    const button = screen.getByTestId('auth-button');
    expect(button).toHaveAttribute('data-auth-state', 'sign-in');
    expect(button).toBeEnabled();
  });

  it('shows authentication button in correct state when authenticated', () => {
    (auth as any).currentUser = mockUser;
    render(<SignInButton />);
    const button = screen.getByTestId('auth-button');
    expect(button).toHaveAttribute('data-auth-state', 'sign-out');
    expect(button).toBeEnabled();
  });

  it('handles sign in flow correctly', async () => {
    (signInWithPopup as jest.Mock).mockResolvedValueOnce({
      user: mockUser
    });

    render(<SignInButton />);
    const button = screen.getByTestId('auth-button');
    
    await fireEvent.click(button);

    await waitFor(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/auth/session',
        expect.objectContaining({
          method: 'POST'
        })
      );
    });
  });

  it('handles sign out flow correctly', async () => {
    (auth as any).currentUser = mockUser;
    (signOut as jest.Mock).mockResolvedValueOnce(undefined);
    
    render(<SignInButton />);
    const button = screen.getByTestId('auth-button');
    
    await fireEvent.click(button);

    await waitFor(() => {
      expect(signOut).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/auth/session',
        expect.objectContaining({
          method: 'DELETE'
        })
      );
    });
  });

  it('shows loading state during authentication actions', async () => {
    // Never resolve to keep button in loading state
    (signInWithPopup as jest.Mock).mockImplementation(() => new Promise(() => {}));
    
    render(<SignInButton />);
    const button = screen.getByTestId('auth-button');
    
    await fireEvent.click(button);
    
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-loading', 'true');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
}); 