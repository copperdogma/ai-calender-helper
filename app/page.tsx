import SignInButton from '@/components/auth/SignInButton';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          AI Calendar Helper
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Your intelligent calendar management solution
        </p>
        <div className="mt-12">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
