import { LockOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./InputField.css";
import { Radio, Typography } from "antd";

export default function InputField() {
  return (
    <>
      <Card
        style={{
          width: 250,
          height: 300,
        }}
        className="card"
      >
        <div className="sec">
          <LockOutlined style={{ marginLeft: "20.8px" }} />
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            Register
          </Typography.Title>
        </div>
      </Card>
    </>
  );
}
