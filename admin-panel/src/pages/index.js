import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Dashboard from "./dashboard";
import Users from "./users";
import Roles from "./roles";
import Permissions from "./permissions";
import Tasks from "./tasks";
import Flows from "./flows";
import Settings from "./settings";

import {
  CarryOutOutlined,
  PieChartOutlined,
  SettingOutlined,
  SkinOutlined,
  SlidersOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { getPermissionsByDefaultUser } from "../services/permission";
import PermissionContext from "../context/PermissionContext";

const MainPage = ({ onChangeTheme }) => {
  const { setPermissions } = useContext(PermissionContext);

  const menu = [
    {
      key: "m1",
      icon: <PieChartOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: "m2",
      icon: <UserOutlined />,
      label: <Link to="/user">User</Link>,
    },
    {
      key: "m3",
      icon: <SkinOutlined />,
      label: <Link to="/role">Role</Link>,
    },
    {
      key: "m4",
      icon: <UnorderedListOutlined />,
      label: <Link to="/permission">Permission</Link>,
    },
    {
      key: "m5",
      icon: <SlidersOutlined />,
      label: <Link to="/task">Tasks</Link>,
    },
    {
      key: "m6",
      icon: <CarryOutOutlined />,
      label: <Link to="/flow">Flows</Link>,
    },
    {
      key: "m7",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  useEffect(() => {
    getPermissionsByDefaultUser().then((permissions) => {
      setPermissions(permissions);
      localStorage.setItem("permissions", permissions);
    });
  }, []);

  return (
    <BrowserRouter>
      <MainLayout menu={menu} onChangeTheme={onChangeTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/user" element={<Users />} />
          <Route path="/role" element={<Roles />} />
          <Route path="/permission" element={<Permissions />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/flow" element={<Flows />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPage;
