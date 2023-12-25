import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import LogoutButton from "@/components/LogoutButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-2xl font-bold">This is a public rout</h1>

      {session ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-green-700">Yuo logged in</h2>
          <LogoutButton />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-fuchsia-700">Please login first</h2>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </main>
  )
}
