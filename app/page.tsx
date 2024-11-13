import { CurrentAccount } from "./current-account";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <div className="text-3xl pb-2">Welcome</div>
            <div className="mb-2">my-sol-token-auth-example</div>
            <CurrentAccount />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 italic"
          href="https://github.com/gin-lsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit gin-lsl →
        </a>
      </footer>
    </div>
  );
}

