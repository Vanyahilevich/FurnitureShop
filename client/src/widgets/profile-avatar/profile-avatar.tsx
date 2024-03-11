import { clientRoutes, serverRoutes } from "src/routes";
import ProfileAvatarIcon from "./icons/profile-avatar-icon";
import SettingAvatarIcon from "./icons/setting-avatar-icon";
import DownloadAvatarIcon from "./icons/download-avatar-icon";
import LogoutAvatarIcon from "./icons/logout-avatar-icon";
import { useAuth, useLogout } from "src/services/auth";
import ProfileAvatarLayout from "./profile-avatar-layout";
import { InfoProfile } from "./info-avatart";
import ProfileButton from "src/shared/profile-button";
import { UserAvatar } from "./user-avatar";

const ProfileAvatar = () => {
  const { data: auth } = useAuth();
  const { mutate: Logout } = useLogout();
  const links = [
    {
      title: "View profile",
      link: clientRoutes.profile,
      iconJSX: <ProfileAvatarIcon />,
      disabled: false,
      onClick: () => {},
    },
    {
      title: "Setting",
      link: "",
      iconJSX: <SettingAvatarIcon />,
      disabled: true,
      onClick: () => {},
    },
    {
      title: "Download",
      link: "",
      iconJSX: <DownloadAvatarIcon />,
      disabled: true,
      onClick: () => {},
    },
    {
      title: "Log out",
      link: "",
      iconJSX: <LogoutAvatarIcon />,
      disabled: false,
      onClick: () => Logout(),
    },
  ];
  const imageSrc = serverRoutes.imageAvatar + auth.imageURL;
  return (
    <ProfileAvatarLayout
      avatar={imageSrc ? <UserAvatar imageSrc={imageSrc} /> : <ProfileButton />}
      items={links}
      header={
        <InfoProfile
          name={auth?.name}
          surname={auth?.surname}
          email={auth?.email}
          imageSrc={imageSrc}
        />
      }
    ></ProfileAvatarLayout>
  );
};

export default ProfileAvatar;
