import { clientRoutes, serverRoutes } from "src/routes";
import ProfileAvatarIcon from "./icons/profile-avatar-icon";
import SettingAvatarIcon from "./icons/setting-avatar-icon";
import DownloadAvatarIcon from "./icons/download-avatar-icon";
import LogoutAvatarIcon from "./icons/logout-avatar-icon";
import { useAuth, useLogout } from "src/services/auth-api";
import ProfileAvatarLayout from "./profile-avatar-layout";
import { InfoProfile } from "./info-avatart";
import ProfileButton from "src/shared/profile-button";
import { UserAvatar } from "./user-avatar";
import FavoriteButton from "src/shared/favorite-button";
import { CiDeliveryTruck, CiHeart, CiShoppingCart } from "react-icons/ci";

const ProfileAvatar = () => {
  const { data: auth } = useAuth();
  const { mutate: Logout } = useLogout();
  // <FavoriteButton />
  // <BasketButton badgeValue={productsFromBasket?.length} />
  // <DeliveryButton badgeValue={productsFromDelivery?.length} />
  const optionalLinks = [
    {
      title: "Favorite Item",
      link: clientRoutes.favorite,
      iconJSX: <CiHeart />,
      disabled: false,
      onClick: () => {},
    },
    {
      title: "Basket",
      link: clientRoutes.basket,
      iconJSX: <CiShoppingCart />,
      disabled: false,
      onClick: () => {},
    },
    {
      title: "Delivery",
      link: clientRoutes.delivery,
      iconJSX: <CiDeliveryTruck />,
      disabled: false,
      onClick: () => {},
    },
  ];
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
  const imageSrc = auth?.imageURL
    ? serverRoutes.imageAvatar + auth.imageURL
    : "";
  return (
    <ProfileAvatarLayout
      avatar={imageSrc ? <UserAvatar imageSrc={imageSrc} /> : <ProfileButton />}
      items={links}
      optionalItems={optionalLinks}
      header={
        <InfoProfile
          name={auth?.name}
          surname={auth?.surname}
          email={auth?.email}
          imageSrc={imageSrc}
        />
      }
    />
  );
};

export default ProfileAvatar;
