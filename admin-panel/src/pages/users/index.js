import { useEffect, useState } from "react";

import { Button, Col, Row, Space, Table, Tag, Typography, theme } from "antd";
import UserForm from "./form";

import { addUser, deleteUser, getUsers, updateUser } from "../../services/user";
import { getRoles } from "../../services/role";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState();
  const {
    token: { colorPrimary, colorTextLightSolid },
  } = theme.useToken();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddUser = () => {
    setEditingUser();
    setIsModalOpen(true);
  };
  const onFinish = (values) => {
    if (editingUser) {
      updateUser({ ...values, id: editingUser.id }).then((response) => {
        setUsers((prevState) =>
          prevState.map((u) => (u.id === response.id ? response : u))
        );
      });
    } else {
      addUser(values).then((response) => {
        setUsers((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };
  const onDelete = (id) => {
    deleteUser(id).then((response) => {
      setUsers((prevState) => prevState.filter((u) => u.id !== id));
    });
  };
  const onEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "us1",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "us2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "us3",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "us4",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "us5",
      width: "25%",
      render: (cell) => {
        return (
          <Space wrap={true}>
            {cell?.map((id) => (
              <Tag key={id} color={colorPrimary}>
                <Typography.Text
                  style={{ maxWidth: 100, color: colorTextLightSolid }}
                  ellipsis={true}
                >
                  {roles.find((r) => r.value === id)?.label}
                </Typography.Text>
              </Tag>
            ))}
          </Space>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "us6",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "us7",
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
    getUsers().then((response) => {
      setUsers(response);
    });
    getRoles().then((response) => {
      setRoles(
        response.map((r) => ({
          value: r.id,
          label: r.name,
        }))
      );
    });
  }, []);

  return (
    <Space className="users" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddUser}
          />
        </Col>
      </Row>
      <Table dataSource={users} columns={columns} />
      {isModalOpen && (
        <UserForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingUser}
          roles={roles}
        />
      )}
    </Space>
  );
};

export default Users;
