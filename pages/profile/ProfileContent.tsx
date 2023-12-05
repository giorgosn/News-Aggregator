// app/profile/ProfileContent.tsx
import React from 'react';
import { useSession } from 'next-auth/react';

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
      {/* Display the user image if available */}
      {session.user.image && <img src={session.user.image} alt={session.user.name} />}
      {/* Additional profile information can be added here */}
    </div>
  );
};

export default ProfileContent;