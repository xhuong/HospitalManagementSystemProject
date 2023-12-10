"use client";

import { EGender, IUserDataType } from "@/types/user";
import { Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Typography } from "antd";
import Link from "next/link";

export default function DoctorListPage() {
  const { Text } = Typography;
  const dataSource: IUserDataType[] = [
    {
      id: 1,
      name: "asdasd",
      phone: "asdasd",
      identification_code: "asdasd",
      address: "asdasd",
      gender: EGender.MALE,
      id_department: 1,
      id_role: 1,
      id_room: 1,
      id_bed: 1,
      create_at: undefined,
      update_at: undefined,
    },
  ];

  const columns: ColumnsType<IUserDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <Text>{name}</Text>;
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => {
        return <Text>{phone ?? "NaN"}</Text>;
      },
    },
    {
      title: "Identification code",
      dataIndex: "identification_code",
      key: "identification-code",
      render: (idCode) => {
        return <Text>{idCode ?? "NaN"}</Text>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => {
        return <Text>{address ?? "NaN"}</Text>;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Id role",
      dataIndex: "id_role",
      key: "id_role",
    },
    {
      title: "Id department",
      dataIndex: "id_department",
      key: "id_department",
      render: (department) => {
        return <Text strong>{department ?? "NaN"}</Text>;
      },
    },
    {
      title: "Id room",
      dataIndex: "id_room",
      key: "id_room",
      render: (id_room) => {
        return <Text>{id_room ?? "NaN"}</Text>;
      },
    },
    {
      title: "Id bed",
      dataIndex: "id_bed",
      key: "id_bed",
      render: (id_bed) => {
        return <Text>{id_bed ?? "NaN"}</Text>;
      },
    },
    {
      title: "Create at",
      dataIndex: "create_at",
      key: "create_at",
      render: (create_at) => {
        return <Text>{create_at ?? "NaN"}</Text>;
      },
    },
    {
      title: "Update at",
      dataIndex: "update_at",
      key: "update_at",
      render: (update_at) => {
        return <Text>{update_at ?? "NaN"}</Text>;
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => {
        return (
          <Space direction="horizontal" size="middle">
            <Link
              href="#"
              className="px-3 py-2 border rounded border-gray-300 hover:border-blue-400"
            >
              Delete
            </Link>
            <Link
              href="#"
              className="px-3 py-2 border rounded border-gray-300 hover:border-blue-400"
            >
              Edit
            </Link>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: "max-content" }}
    />
  );
}
