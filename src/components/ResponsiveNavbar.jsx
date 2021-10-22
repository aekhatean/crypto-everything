import React from "react";
import { Layout, Menu, Affix } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const ResponsiveNavbar = () => {
  return (
    <Layout>
      <Affix>
        <Sider breakpoint="lg" collapsedWidth="0" theme="dark">
          <Menu
            className="menu-wrapper"
            theme="dark"
            mode="inline"
            style={{ marginTop: "2em", position: "static" }}
            defaultSelectedKeys={["4"]}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} key="2">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />} key="3">
              <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />} key="4">
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Affix>
    </Layout>
  );
};

export default ResponsiveNavbar;
