"use client";

import { Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { IDepartmentDataType, EDepartmentType } from "@/types/department";

export default function RoomListPage() {
  const [data, setData] = useState([]);
  const { Text } = Typography;

  useEffect(() => {}, []);

  const columns: ColumnsType<IDepartmentDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <Text>{name}</Text>;
      },
    },
    {
      title: "Department type",
      dataIndex: "department_type",
      key: "department_type",
      render: (department_type) => {
        return <Text>{department_type ?? "NaN"}</Text>;
      },
    },
  ];

  const dataSource: IDepartmentDataType[] = [
    {
      name: "A001",
      department_type: EDepartmentType.CLINICAL_DEPARTMENT,
    },
    {
      name: "A001",
      department_type: EDepartmentType.CLINICAL_DEPARTMENT,
    },
    {
      name: "A001",
      department_type: EDepartmentType.CLINICAL_DEPARTMENT,
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
