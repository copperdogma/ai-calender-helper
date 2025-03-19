'use client';

import { useEffect, useState } from 'react';
import { auth } from '../../lib/firebase';
import { User } from 'firebase/auth';
import { Card } from '../ui/Card';
import SignInButton from './SignInButton';
import Image from 'next/image'

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Card>
        <div className="flex flex-col items-center p-6" data-testid="profile-loading">
          <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse mb-4" />
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse mb-2" />
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse mb-4" />
        </div>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card>
        <div className="flex flex-col items-center p-6">
          <SignInButton />
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col items-center p-6">
        {user.photoURL && (
          <Image
            src={user.photoURL}
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <h2 className="text-xl font-semibold mb-2" data-testid="profile-name">
          {user.displayName || 'Anonymous User'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4" data-testid="profile-email">
          {user.email || 'No email provided'}
        </p>
        <SignInButton />
      </div>
    </Card>
  );
} 