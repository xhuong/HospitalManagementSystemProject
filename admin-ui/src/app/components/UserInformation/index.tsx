import { Avatar, Space, Typography } from "antd";

export default function UserInformation({ name }: { name: string }) {
  return (
    <div className="hover:bg-gray-50 cursor-pointer h-12 ml-auto w-36 inline-flex items-center rounded-md overflow-hidden justify-between px-4">
      <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      <Typography className="text-base">{name}</Typography>
    </div>
  );
}
