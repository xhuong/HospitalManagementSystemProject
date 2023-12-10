"use client";

import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

import { Layout, Menu, Button, theme } from "antd";
import type { MenuProps } from "antd";
import UserInformation from "../UserInformation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBed,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const { Header, Sider, Content } = Layout;

interface IMainLayoutPropsType {
  children?: React.ReactNode;
  openKeys?: string;
  selectedKeys?: string;
}

export default function MainLayout({
  children,
  ...props
}: IMainLayoutPropsType) {
  const [collapsed, setCollapsed] = useState(false);
  const [listKey, setListKey] = useState({
    openKeys: "",
    selectedKeys: "",
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  const pathName = usePathname();

  const listItem: MenuProps["items"] = [
    {
      key: "user-management",
      icon: <UserOutlined />,
      label: "User management",
      children: [
        {
          key: "admin-list",
          label: "Admin list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/user/admin-list"),
        },
        {
          key: "doctor-list",
          label: "Doctor list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/user/doctor-list"),
        },
        {
          key: "pharmacist-list",
          label: "Pharmacist list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/user/pharmacist-list"),
        },
        {
          key: "nurse-list",
          label: "Nurse list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/user/nurse-list"),
        },
        {
          key: "patient-list",
          label: "Patient list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/user/patient-list"),
        },
      ],
    },
    {
      key: "department-management",
      icon: <FontAwesomeIcon icon={faBuilding} />,
      label: "Department management",
      children: [
        {
          key: "department-list",
          label: "Department list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/department/department-list"),
        },
      ],
    },
    {
      key: "room-management",
      icon: <UserOutlined />,
      label: "Room management",
      children: [
        {
          key: "Room-list",
          label: "Room list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/room/room-list"),
        },
      ],
    },
    {
      key: "bed-management",
      icon: <FontAwesomeIcon icon={faBed} />,
      label: "Bed management",
      children: [
        {
          key: "bed-list",
          label: "Bed list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/bed/bed-list"),
        },
      ],
    },
    {
      key: "service-management",
      icon: <SettingOutlined />,
      label: "Service management",
      children: [
        {
          key: "service-list",
          label: "Service list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/service/service-list"),
        },
      ],
    },
    {
      key: "role-management",
      icon: <UserOutlined />,
      label: "Role management",
      children: [
        {
          key: "role-list",
          label: "Role list",
          icon: <FontAwesomeIcon icon={faArrowRight} />,
          onClick: () => router.push("/role/role-list"),
        },
      ],
    },
  ];

  useEffect(() => {
    if (pathName.includes("/admin-list")) {
      setListKey({
        openKeys: "user-management",
        selectedKeys: "admin-list",
      });
    }
    if (pathName.includes("/doctor-list")) {
      setListKey({
        openKeys: "user-management",
        selectedKeys: "doctor-list",
      });
    }
  }, [pathName]);

  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
        width={300}
      >
        <div
          style={{
            background: "#d7d7d7",
            margin: "8px",
            height: "48px",
            borderRadius: "6px",
          }}
        ></div>
        <Menu
          mode="inline"
          openKeys={[listKey.openKeys]}
          selectedKeys={[listKey.selectedKeys]}
          style={{ height: "100%", borderRight: 0 }}
          items={listItem}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            padding: "0 16px 0 0",
          }}
        >
          <div className="justifyBetween">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <UserInformation name="Xuân Hướng" imageSrc={""} />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
