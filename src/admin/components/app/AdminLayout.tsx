import React from "react";
import {
  DashboardOutlined,
  FileImageOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  CustomerServiceOutlined,
  BookOutlined,
  SettingOutlined,
  SendOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Typography, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to the login page
    navigate("/");
  };

  const handleMenuSelect = (e: { key: string }) => {
    if (e.key === "logout") {
      handleLogout();
    } else {
      navigate(e.key);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "/admin/manager",
      icon: React.createElement(DashboardOutlined),
      label: `Dolandyryş panely`,
    },
    {
      key: "file",
      icon: React.createElement(FileImageOutlined),
      label: `Saýt faýllary`,
    },
    {
      key: "home",
      icon: React.createElement(HomeOutlined),
      label: `Baş sahypa`,
    },
    {
      key: "about",
      icon: React.createElement(InfoCircleOutlined),
      label: `Biz barada`,
    },
    {
      key: "service_slide",
      icon: React.createElement(CustomerServiceOutlined),
      label: `Hyzmat Slidelar`,
    },
    {
      key: "service_item",
      icon: React.createElement(CustomerServiceOutlined),
      label: `Hyzmat Kardlar`,
    },
    {
      key: "portfolia",
      icon: React.createElement(BookOutlined),
      label: `Portfolia`,
    },
    {
      key: "contact",
      icon: React.createElement(SendOutlined),
      label: `Kontakt temasy`,
    },
    // {
    //   key: "other",
    //   icon: React.createElement(SettingOutlined),
    //   label: `Sazlamalar`,
    // },
    {
      key: "social_media",
      icon: React.createElement(SettingOutlined),
      label: `Sosial ulgam`,
    },
    {
      key: "logout",
      icon: React.createElement(LogoutOutlined),
      label: `Log Out`,
    },
  ];

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            justifyContent: "center",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <img
            src="/images/logo.png"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <Typography
            style={{
              color: "white",
              fontSize: "22px",
            }}
          >
            Admin
          </Typography>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/admin/manager"]}
          items={items}
          onClick={handleMenuSelect}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px", // Adjust gap as needed
          }}
        >
          <img
            src="/images/GeekSpaceLogo.svg"
            style={{ height: "50px" }}
            alt="GeekSpace Logo"
          />
          <span>©{new Date().getFullYear()}</span>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
