import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [subtaskInput, setSubtaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subtaskInput) {
      onSubmit(subtaskInput);
      setSubtaskInput(''); // Clear input after submission
    } else {
      alert('Please enter a subtask.');
    }
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Add Subtask</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={subtaskInput}
            onChange={(e) => setSubtaskInput(e.target.value)}
            className="border p-2 flex-grow mb-2"
            placeholder="Enter subtask"
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Subtask</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
