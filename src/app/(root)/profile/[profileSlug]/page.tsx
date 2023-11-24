import { notFound } from "next/navigation";
import ProfileHeader from "~/app/_components/profile/profile-header";
import { api } from "~/trpc/server";

export default async function UserProfile({
  params: { profileSlug },
}: IUserProfile) {
  const profile = await api.profile.getProfileBySlug.query(
    decodeURIComponent(profileSlug),
  );
  if (!profile) return notFound();
  return (
    <section id="page">
      <ProfileHeader name={profile.displayName} />
    </section>
  );
}

interface IUserProfile {
  params: { profileSlug: string };
}
