"use client";

export default function UserProfile({ params: { profileSlug } }: IUserProfile) {
  return <section id="page">{profileSlug}</section>;
}

interface IUserProfile {
  params: { profileSlug: string };
}
