import React, { useState, useEffect } from "react";
import { addRole, deleteRole, getRole, updateRole } from "../../services/role";
import { Button, Col, Row, Space, Table, Tag, theme } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import RoleForm from "./form";
import { getPermissions } from "../../services/permission";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRoles] = useState();
  const [permissions, setPermissions] = useState([]);

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddRole = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingRole) {
      updateRole({ ...values, id: editingRole.id }).then((response) => {
        setRoles((prevState) =>
          prevState.map((p) => (p.id === response.id ? response : p))
        );
      });
    } else {
      addRole(values).then((response) => {
        setRoles((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    deleteRole(id).then((response) => {
      setRoles((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (roles) => {
    setEditingRoles(roles);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "r1",
    },
    {
      title: "Permissions",
      dataIndex: "permission",
      key: "r2",
      render: (cell) => (
        <Space>
          {cell?.map((id) => (
            <Tag key={id} color={colorPrimary}>{permissions.find((p) => p.value === id).label}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "p2",
      width: "100px",
      render: (cell, row) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size="small"
            onClick={() => onEdit(row)}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => onDelete(cell)}
            danger
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getRole().then((response) => {
      setRoles(response);
    });
    getPermissions().then((response) => {
      setPermissions(
        response.map((p) => ({
          value: p.id,
          label: p.name,
        }))
      );
    });
  }, []);

  return (
    <Space className="roles" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddRole}
          />
        </Col>
      </Row>
      <Table dataSource={roles} columns={columns} />
      {isModalOpen && (
        <RoleForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingRole}
          permissions={permissions}
        />
      )}
    </Space>
  );
};

export default Roles;
