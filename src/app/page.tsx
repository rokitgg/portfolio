import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-100 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      {/* Header */}
      <header className="mb-32 flex flex-col items-start">
        <Link href="/" className="text-medium inline-block font-medium no-underline">
          Omar Nahid
        </Link>
        <span className="text-medium font-medium leading-none text-gray-400">
          Software Engineer
        </span>
      </header>

      <main>
        {/* Today Section */}
        <span className="mb-5 block font-medium sm:mb-6">Today</span>
        <p className="text-gray-400">
          I'm currently open to work opportunities. I like to build things focused on end customers and
          developers, and think deeply about the user interface, how it looks, feels, behaves.
        </p>
        <p className="mt-4 text-gray-400">
          Previously, I worked as a software engineer at various crypto ventures.
        </p>

        {/* Projects Section */}
        <div className="-mb-3 mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-4">Projects</span>
          <div className="flex flex-col gap-7 sm:gap-4">
            <a
              href="https://github.com/rokitgg/hyperliquid-trades-feed"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-gray-800 sm:py-3" rel="noreferrer"
            >
              <span>Hyperliquid Trades Feed</span>
              <span className="text-gray-400">Get notified when big trades happen on Hyperliquid - the blockchain to house all finance.</span>
            </a>
            <a
              href="https://funding-rates-dashboard.vercel.app/"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-gray-800 sm:py-3" rel="noreferrer"
            >
              <span>Funding Dashboard</span>
              <span className="text-gray-400">A real-time dashboard to compare funding rates across a variety of decentralized exchanges.</span>
            </a>
            <a
              href="https://github.com/rokitgg/crypto-avatar"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-gray-800 sm:py-3" rel="noreferrer"
            >
              <span>Crypto Avatar</span>
              <span className="text-gray-400">Crypto avatars as a microservice.</span>
            </a>
          </div>
        </div>

        {/* More Section */}
        <div className="mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-6">More</span>
          <span className="text-gray-400">
            You can see more of my work on {" "}
            <a href="https://twitter.com/rokitdotgg" target="_blank" className="underline" rel="noreferrer">
              Twitter
            </a> and more of my code on {" "}
            <a href="https://github.com/rokitgg" target="_blank" className="underline" rel="noreferrer">
              GitHub
            </a>.
          </span>
        </div>
      </main>
    </div>
  );
}
