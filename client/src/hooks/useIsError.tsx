import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "src/ui-kit/ui-link";
import { clientRoutes, serverRoutes } from "src/routes";
import GetBackButton from "src/shared/get-back-button";

const useIsError = (error: any) => {
  return (
    <div className="flex flex-col flex-auto items-center justify-center gap-10">
      <div className="text-2xl">An error has occurred: {error?.message}</div>
      <div className="flex gap-10 items-center">
        <GetBackButton />
        <Link to={clientRoutes.home}>Go to the home page</Link>
      </div>
    </div>
  );
};

export default useIsError;
