import dynamic from "next/dynamic";

const SignInButton = dynamic(() => import("../sign-in/sign-button"), {
  ssr: false,
});

export default function SignInPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-500 py-6">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base heading-7 text-gray-600">
              <p className="text-xl font-semibold mb-16">
                Welcome to Sol Token Auth Example
              </p>

              <SignInButton />

              <div className="text-xs font-light leading-7 text-right text-gray-400">
                Powered by Ant Design Web3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
