'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../../lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Button } from '../ui/Button';

export default function SignInButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // Create session
      const response = await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to create session');
      }

      router.push('/dashboard');
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      
      // Delete session
      await fetch('/api/auth/session', {
        method: 'DELETE',
      });

      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = !!auth.currentUser;
  
  return (
    <Button
      onClick={isAuthenticated ? handleSignOut : handleSignIn}
      disabled={loading}
      data-testid="auth-button"
      data-auth-state={isAuthenticated ? 'sign-out' : 'sign-in'}
      data-loading={loading}
    >
      {isAuthenticated ? 'Sign out' : 'Sign in with Google'}
    </Button>
  );
} 