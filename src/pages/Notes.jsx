import React, { useState } from "react";

const notesData = {
  "Semester 1": {
    "Introduction to Computing": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Engineering Physics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Communicative English": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 2": {
    "Engineering Chemistry": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Electrical Workshop": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Engineering Graphics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 3": {
    "Electrical Machines-I": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Analog Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 4": {
    "Electrical Machines-II": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Digital Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 5": {
    "Power Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Signal and System Analysis": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 6": {
    "Power System Protection": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Industrial Drives and Control": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 7": {
    "Dissertation - I": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 8": {
    "Dissertation - II": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
};

const NotesDriveAccess = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = selectedSemester ? Object.keys(notesData[selectedSemester]) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        📚 Access Notes Drive
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        {/* Semester Dropdown */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-gray-700">Select Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              setSelectedSubject("");
            }}
            className="w-full p-2 border rounded-md"
          >
            <option value="">-- Select Semester --</option>
            {Object.keys(notesData).map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Dropdown */}
        {selectedSemester && (
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">Select Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">-- Select Subject --</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Link to Drive */}
        {selectedSubject && (
          <div className="mt-4 text-center">
            <a
              href={notesData[selectedSemester][selectedSubject]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
            >
              📂 Open Notes Drive
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesDriveAccess;
