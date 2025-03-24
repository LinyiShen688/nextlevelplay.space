import React from 'react';
import { useAuthStore } from '../store/authStore';

export function UserProfile() {
  const { user, signOut } = useAuthStore();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-gray-300">
          {user?.email}
        </div>
        <button
          onClick={signOut}
          className="px-4 py-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700"
        >
          退出登录
        </button>
      </div>
    </div>
  );
}