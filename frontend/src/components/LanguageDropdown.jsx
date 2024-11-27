import React, { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Select a language");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["C", "C++", "Java", "JavaScript", "Python", "Go"];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown trigger */}
      <div
        className="border-x-2 border-green-900 px-2 py-2 bg-grey-800 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-grey-800 text-white rounded-md shadow-lg z-10">
          {languages.map((language, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
