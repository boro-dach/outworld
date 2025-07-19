import Image from "next/image";
import React from "react";

const NoAdmin = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-4xl">сюда вход запрещен, хитрюган</p>
      <Image src={"/no-admin.webp"} width={512} height={512} alt="rofls" />
    </div>
  );
};

export default NoAdmin;
