import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

async function LandingPageNavbar() {
  const user: User | null = await currentUser();

  return (
    <nav className="flex w-screen items-center justify-between p-6 ">
      <div>
        <Link
          className="text-2xl font-bold text-purple-500 no-underline"
          href="/"
        >
          ViceXL
        </Link>
      </div>
      <div className="text-purple-500 font-semibold text-lg">
        {user ? (
          <div className="flex flex-row gap-x-4 items-center">
            <Link href="/lead-magnets">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
      
    </nav>
  );
}

export default LandingPageNavbar;
