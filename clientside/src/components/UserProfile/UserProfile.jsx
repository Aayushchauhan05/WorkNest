import React from "react";
import Link from "next/link";

const UserProfile = ({ userName, userProfession }) => {
  const Initials = userName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <Link href="/companydashboard/profile" className="mb-5">
      <div className="flex items-center gap-4 md:mt-0 mt-5">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
          <span className="flex h-full w-full items-center text-black justify-center rounded-full bg-muted">
            {Initials}
          </span>
        </span>
        <div className="grid gap-1">
          <h1 className="text-xl font-semibold md:text-2xl">{userName}</h1>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {userProfession}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfile;
