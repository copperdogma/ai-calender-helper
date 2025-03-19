import UserProfile from '@/components/auth/UserProfile';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <UserProfile />
        </div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-4 text-gray-400">
          Welcome to your calendar dashboard. This page is protected and only accessible when signed in.
        </p>
      </div>
    </div>
  );
} 