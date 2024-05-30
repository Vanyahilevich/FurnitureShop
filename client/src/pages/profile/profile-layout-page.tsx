import useIsAuth from "src/hooks/useIsAuth";
import ProfileEmailForm from "src/widgets/profile-email-form/profile-email-form";
import ImageProfileSetting from "src/widgets/profile-image-form/image-profile-setting";
import ProfileNameForm from "src/widgets/profile-name-form/profile-name-form";
import ProfileSurnameForm from "src/widgets/profile-surmane-form/profile-surname-form";

const ProfileLayoutPage = () => {
  const {
    isAuthenticated,
    authJSX,
    isLoading: authIsLoading,
    userId,
  } = useIsAuth();
  if (!isAuthenticated) {
    return authJSX;
  }
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-96 flex flex-col ">
        <ImageProfileSetting />
        <ProfileNameForm />
        <ProfileSurnameForm />
        <ProfileEmailForm />
      </div>
    </div>
  );
};

export default ProfileLayoutPage;
