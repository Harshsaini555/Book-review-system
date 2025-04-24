import {useState} from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import {   toast } from "sonner"
import { useAuth } from "../../context/AuthContext.tsx";

export default function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost/Backend/login.php", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();

    if (res.ok && result.message) {
      toast.success(result.message);
      // Update context with user returned by login.php
      login({ id: result.user.id, username: result.user.username, email: result.user.email });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000); 
    } else {
      toast.error(result.error || "Login failed!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a  className="text-zinc-400 hover:text-zinc-500 hover:underline cursor-pointer mr-6 mt-[6px]">Login</a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader className="text-2xl mx-auto font-bold text-gray-800">
          <DialogTitle>Login to BookVibe</DialogTitle>
        </DialogHeader>
          <div className="mx-auto my-4">
            <a href="#" className="inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-2">
              <FaFacebookF className="text-gray-600" />
            </a>
            <a href="#" className="inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-2">
              <FaGooglePlusG className="text-gray-600" />
            </a>
            <a href="#" className="inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-2">
              <FaLinkedinIn className="text-gray-600" />
            </a>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-2">
            <div className="grid grid-cols-4 text-black items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input 
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="col-span-3 mt-1 w-full rounded-lg border-gray-300 focus:outline-none  focus: ring-gray-100  p-3" />
            </div>
            <div className="grid grid-cols-4 text-black items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input 
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="col-span-3 mt-1 w-full rounded-lg border-gray-300 focus:outline-none  focus: ring-gray-100  p-3" />
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center p-4">
              Don't have an account? <a href="/Signup" className="text-zinc-400 text-sm hover:text-zinc-500 hover:underline ">Sign Up</a>
          </p>
          <DialogDescription>
            Please log in to continue.
          </DialogDescription>
          <DialogFooter className="pt-2">
            <Button type="submit" className="w-full bg-black text-white font-semibold  rounded-lg hover:bg-gray-800 transition">Welcome Back</Button>
          </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
