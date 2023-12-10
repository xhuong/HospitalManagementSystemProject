"use client";

import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { IRoomDataType } from "@/types/room";

export default function RoomListPage() {
  const [data, setData] = useState([]);
  const { Text } = Typography;

  useEffect(() => {}, []);

  const columns: ColumnsType<RoomDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <Text>{name}</Text>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return <Text>{price ?? "NaN"}</Text>;
      },
    },
  ];

  const dataSource: RoomDataType[] = [
    {
      name: "A001",
      price: 20000,
    },
    {
      name: "A001",
      price: 20000,
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
