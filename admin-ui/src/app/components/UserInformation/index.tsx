import { Avatar, Typography } from "antd";

export default function UserInformation({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) {
  return (
    <div className="cursor-pointer h-12 ml-auto inline-flex items-center rounded-md overflow-hidden justify-between px-4 gap-x-2">
      <Avatar src={imageSrc} />
      <Typography className="text-base ">{name}</Typography>
    </div>
  );
}
