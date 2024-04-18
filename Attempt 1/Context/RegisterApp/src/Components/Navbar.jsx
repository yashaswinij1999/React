import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function NavBar() {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button type="primary" icon={<SearchOutlined />} className="">
            Search
          </Button>
        </Header>
      </Layout>
    </>
  );
}
