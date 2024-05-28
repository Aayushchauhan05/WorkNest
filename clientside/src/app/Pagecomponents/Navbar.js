
import Link from "next/link"

import { Button } from "@/components/ui/button"
function Navbar() {
  return (
    <>
     <header className="fixed flex items-center w-screen h-16 bg-transparent justify-evenly">
        <h3 className="logo">Dehix</h3>
        <div className="flex h-auto text-white min-w-96 navlink justify-evenly first:bg-red-500">
            <a href="" className="text-red-500 ">Jobs</a>
            <a href="">Jobs</a>
            <a href="">Jobs</a>
            <a href="">Jobs</a>
            <a href="">Jobs</a>
        </div>
        <div className="flex Login_register justify-evenly w-36">
        <Button asChild>
      <Link href="/login" className="mx-4 ">Login</Link>
    </Button>
    <Button asChild>
      <Link href="/login">Register</Link>
    </Button>
    


        </div>
     </header>
    </>
  )
}

export default Navbar