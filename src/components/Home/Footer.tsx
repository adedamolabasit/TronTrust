import { Facebook, Linkedin, Github, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">TrustFi</h3>
            <p className="text-sm">Empowering DeFi through trusted credit scoring</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <X />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Github />
            </a>
          </div>
        </div>
        <div className="w-full flex  flex-col items-start justify-start mt-8 text-center text-sm">
          <p>&copy; 2025 TrustFi. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:underline ml-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

