import MainLayout from "@/app/components/MainLayout";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export default function DoctorListPage() {
  interface DataType {
    key: React.Key;
    name: string;
    phone: string;
    identification_code: string;
    address: string;
    gender: string;
    id_department: number;
    id_role: number;
    id_room: number;
    id_bed: number;
    create_at?: Date;
    update_at?: Date;
  }

  const dataSource: DataType[] = [
    {
      key: 1,
      name: "asdasd",
      phone: "asdasd",
      identification_code: "asdasd",
      address: "asdasd",
      gender: "asdasd",
      id_department: 1,
      id_role: 1,
      id_room: 1,
      id_bed: 1,
      create_at: undefined,
      update_at: undefined,
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Identification code",
      dataIndex: "identification_code",
      key: "identification-code",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
    },
    {
      title: "Id room",
      dataIndex: "id_room",
      key: "id_room",
    },
    {
      title: "Id bed",
      dataIndex: "id_bed",
      key: "id_bed",
    },
    {
      title: "Create at",
      dataIndex: "create_at",
      key: "create_at",
    },
    {
      title: "Update at",
      dataIndex: "update_at",
      key: "update_at",
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
