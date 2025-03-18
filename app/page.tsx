import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">
          AI Calendar Helper
        </h1>
        <p className="text-xl mb-4">
          Your intelligent calendar management solution
        </p>
      </div>
    </main>
  );
}
