import { auth } from "@/auth";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const session = await auth(); // Fetch user session on the server
  return <Navbar session={session} />;
}
