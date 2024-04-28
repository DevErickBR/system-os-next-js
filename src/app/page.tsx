'use client'
import { useClientList } from "./helpers/useClientList";

import React from "react";

const Page = (): React.ReactNode => {

  const { clients } = useClientList()
  return (
    <>
      <div>
        home
      </div>
    </>
  );
};

export default Page;