"use client";
import { useState } from 'react';
import { createClient } from '@/libs/supabase/client';

export default function DeleteAccountModal({ isOpen, onClose }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      const supabase = createClient();
      
      // Delete user profile first
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', (await supabase.auth.getUser()).data.user?.id);

      if (profileError) {
        console.error('Error deleting profile:', profileError);
      }

      // Delete the user account
      const { error: deleteError } = await supabase.auth.admin.deleteUser(
        (await supabase.auth.getUser()).data.user?.id
      );

      if (deleteError) {
        throw deleteError;
      }

      // Sign out the user
      await supabase.auth.signOut();
      
      // Redirect to home page
      window.location.href = '/';
    } catch (err) {
      console.error('Error deleting account:', err);
      setError('Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-red-600 mb-4">Delete Account</h2>
        
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
          >
            {isDeleting ? 'Deleting...' : 'Delete Account'}
          </button>
        </div>
      </div>
    </div>
  );
}
