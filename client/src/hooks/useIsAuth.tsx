import Link from "src/ui-kit/ui-link";
import { clientRoutes } from "src/routes";
import { useAuth } from "src/services/auth-api";
import GetBackButton from "src/shared/get-back-button";

const useIsAuth = () => {
  const { data: auth, isLoading } = useAuth();
  return {
    isLoading: isLoading,
    isAuthenticated: !!auth,
    userId: auth?.id,
    authJSX: !auth ? (
      <div className="flex flex-col flex-auto items-center justify-center gap-10">
        <div className="text-2xl">You are not registered</div>
        <div className="flex gap-10 items-center">
          <GetBackButton />
          <Link to={clientRoutes.login}>Go to the login page?</Link>
        </div>
      </div>
    ) : null,
  };
};

export default useIsAuth;
