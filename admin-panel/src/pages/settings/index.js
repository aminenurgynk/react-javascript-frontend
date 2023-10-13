import { useEffect, useState } from "react";
import { Button, Form, Select } from "antd";
import { getUsers } from "../../services/user";
import {
  getSettings,
  setSettings as setSettingsToDb,
} from "../../services/settings";

const Settings = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({});

  const onFinish = (values) => {
    setSettingsToDb(values);
  };

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(
        response.map((u) => ({
          label: `${u.firstname} ${u.lastname}`,
          value: u.id,
        }))
      );

      getSettings().then((response) => {
        setSettings(response);
        form.setFieldsValue(response);
      });
    });
  }, []);

  return (
    <Form
      form={form}
      name="settings"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={settings}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="User"
        name="user"
        rules={[
          {
            required: true,
            message: "Please select your user!",
          },
        ]}
      >
        <Select options={users} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Settings;
