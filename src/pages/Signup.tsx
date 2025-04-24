

import { Toaster, toast } from "sonner"

import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Signup : React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost/Backend/Signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form)
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error);

      <Toaster position="bottom-right" />
      toast.success(result.message || "Signup successful!")
      setForm({ username: "", email: "", password: "" });
      setTimeout(() => navigate("/"), 1500);

    } catch (err: any) {

      toast.error(err || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop')`
      }}
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20" />
      
      <div className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gray-700 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-gray-500">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
                className="pl-10 w-full h-12 text-gray-800  bg-gray-50/50 border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-xl transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="pl-10 w-full h-12 text-gray-800  bg-gray-50/50 border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-xl transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create a secure password"
                value={form.password}
                onChange={handleChange}
                required
                className="pl-10 pr-10 w-full h-12 text-gray-800  bg-gray-50/50 border-gray-200 focus:border-gray-300 focus:ring-gray-300 rounded-xl transition-all duration-200 placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <Button
           type="submit"
           disabled={loading}
           className="w-full h-12 bg-gradient-to-r from-slate-400 to-slate-500 hover:opacity-90 rounded-xl text-white font-medium transition-all duration-200 transform hover:scale-[1.02]">
           {loading ? "Creating..." : "Sign Up"}
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-[#9b87f5] hover:text-[#6E59A5] font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

