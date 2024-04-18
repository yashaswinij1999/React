import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <Layout>
        <Header
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button type="primary" icon={<SearchOutlined />} className="btn">
            Search
          </Button>
        </Header>
      </Layout>
    </>
  );
}
