// Move ProfileContent.tsx to a different directory (e.g., components) or use the following approach:
// components/profile/ProfileContent.tsx
use client;

import React from 'react';
import { useSession } from 'next-auth/react';

// Add "use client" directive if you keep it in the `app` directory
// use client;
const ProfileContent = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      {session.user.image && <img src={session.user.image} alt={session.user.name} />}
    </div>
  );
};

export default ProfileContent;
