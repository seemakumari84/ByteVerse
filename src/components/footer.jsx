import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 text-center space-y-4">
      <p className="italic text-lg text-gray-300">For feedback or quaries</p>

      <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-green-400" size={18} />
          <span>8603410057</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="text-red-400" size={18} />
          <a
            href="mailto:nauser522@gmail.com"
            className="underline hover:text-white"
          >
            nauser522@gmail.com
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-sm">
        2023–2025 studymasalaa.com. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
