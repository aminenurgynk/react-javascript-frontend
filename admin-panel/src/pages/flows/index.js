import React, { useEffect, useState } from "react";
import {
  addFlows,
  deleteFlows,
  getFlows,
  updateFlows,
} from "../../services/flow";
import { Button, Col, Row, Space, Table, Tag, theme } from "antd";
import "./index.scss";
import FlowForm from "./form";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { getTasks } from "../../services/task";

const Flows = () => {
  const [flows, setFlows] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFlows, setEditingFlows] = useState();
  const [tasks, setTasks] = useState();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onClickAddFlows = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingFlows) {
      updateFlows({ ...values, id: editingFlows.id }).then((response) => {
        setFlows((prevState) =>
          prevState.map((t) => (t.id === response.id ? response : t))
        );
      });
    } else {
      addFlows(values).then((response) => {
        setFlows((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };
  const onDelete = (id) => {
    deleteFlows(id).then((response) => {
      setFlows((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (flows) => {
    setEditingFlows(flows);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Flow Name",
      dataIndex: "flow name",
      key: "f1",
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "f2",
      render: (cell) => {
        return (
          <Space>
            {cell?.map((id) => (
              <Tag key={id} color={colorPrimary}>{tasks.find((t) => t.value === id)?.label}</Tag>
            ))}
          </Space>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "f3",
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
    getFlows().then((response) => {
      setFlows(response);
    });
    getTasks().then((response) => {
      setTasks(
        response.map((t) => ({
          value: t.id,
          label: t.name,
        }))
      );
    });
  }, []);

  return (
    <Space className="flows" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddFlows}
          />
        </Col>
      </Row>
      <Table dataSource={flows} columns={columns} />
      {isModalOpen && (
        <FlowForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingFlows}
          tasks = {tasks}
        />
      )}
    </Space>
  );
};

export default Flows;
