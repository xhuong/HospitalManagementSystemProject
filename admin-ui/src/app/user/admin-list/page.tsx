"use client";

import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { IUserDataType } from "@/types/user";
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { mapUserDataFromAPIToUI } from "../utils";
import { useGetAllUserQuery } from "@/redux/services/userService";

export default function AdminListPage() {
  const { isLoading, data } = useGetAllUserQuery();
  const [adminList, setAdminList] = useState<IUserDataType[]>([]);
  const { Text } = Typography;

  useEffect(() => {
    if (data) {
      const { data: users } = data.result;
      setAdminList(users.length > 0 ? mapUserDataFromAPIToUI(users) : []);
    }
  }, [data]);

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
      render: (gender) => {
        return <Text>{gender ?? "NaN"}</Text>;
      },
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
  ];

  return (
    <Table
      dataSource={adminList}
      loading={isLoading}
      columns={columns}
      scroll={{ x: "max-content" }}
    />
  );
}
