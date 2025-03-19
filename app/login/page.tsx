import SignInButton from '@/components/auth/SignInButton';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your calendar
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
} 