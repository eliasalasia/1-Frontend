import React, { useState, useContext, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../services/UserContext';

function Update() {
  const { user, updateUser, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: user.name || '',
    bio: user.biografia || '',
    phone: user.phone || '',
    email: user.email || '',
    password: ''
  });
  const [photo, setPhoto] = useState(user.photo || '/path-to-default-profile-image.jpg');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData, photo };
      await updateUser(updatedData);
      console.log('Perfil actualizado correctamente');
      navigate('/info');
    } catch (error) {
      console.error('Error updating user:', error.response ? error.response.data : error.message);
      // Puedes mostrar un mensaje al usuario o realizar alguna acción de recuperación aquí
    }
  };

  const handleBack = () => {
    navigate('/info');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="font-sans min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white">
        <img src="/devchallenges.svg" alt="devchallenges" className="h-8 w-36" />
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
            <img src={photo} alt="Profile" className="w-8 h-8 rounded-lg mr-2" />
            <span>{user.name}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link to="/info" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Group Chat</a>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl border border-gray-300">
        <div className="p-6 border-b border-gray-200">
          <button onClick={handleBack} className="text-blue-500 mb-4">← Back</button>
          <h2 className="text-2xl font-medium">Change Info</h2>
          <p className="text-sm text-gray-500">Changes will be reflected to every services</p>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-6">
            <img src={photo} alt="Profile" className="w-16 h-16 rounded-lg mr-4 object-cover" />
            <button onClick={handlePhotoClick} className="text-gray-500 text-sm">CHANGE PHOTO</button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.biografia}
                onChange={handleChange}
                placeholder="Enter your bio..."
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your new password..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save</button>
          </form>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500 pb-4">
        <p>created by username</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
}

export default Update;