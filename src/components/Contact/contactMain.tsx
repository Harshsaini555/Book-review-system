import { useState } from "react";
import { Mail, Phone, Clock, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactMain = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const sendData = new FormData();
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("message", formData.message);

    try {
      const response = await fetch("http://localhost/Backend/contact.php", {
        credentials: "include",
        method: "POST",
        body: sendData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-25 bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          We'd love to hear from you! 📚
        </h1>
        <p className="text-lg text-gray-600">
          Our inbox is always open — fill out the form and we'll reply as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="What should we call you?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-none bg-gray-50 focus:ring-2 focus:ring-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-none bg-gray-50 focus:ring-2 focus:ring-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What would you like to tell us?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-none bg-gray-50 focus:ring-2 focus:ring-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-left text-gray-900">Email</h3>
                  <p className="text-gray-600">support@bookvibes.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-left text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 8368074576</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-left text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-medium text-left text-gray-900 mb-4">Follow us on</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/saini.harsh05__/?next=%2F&hl=en" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://x.com/Harshsaini_05" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/harsh-saini-89a6a524a/" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/Harshsaini555" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMain;
