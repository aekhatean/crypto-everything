import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card, Space } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImageUrl =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 8 : 24,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins?.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((newsArticle, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={newsArticle.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {newsArticle.name}
                </Title>
                <img
                  src={
                    newsArticle?.image?.thumbnail?.contentUrl || demoImageUrl
                  }
                  alt={newsArticle.name}
                />
              </div>
              <p>
                {newsArticle.description > 100
                  ? `${newsArticle.descripion.substring(0, 100)}..`
                  : newsArticle.description}
              </p>
              <div className="provider-container">
                <Space>
                  <Avatar
                    src={
                      newsArticle.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImageUrl
                    }
                    alt="Publisher"
                  />
                  <Text className="provider-name">
                    {newsArticle.provider[0]?.name}
                  </Text>
                  <Text>
                    {moment(newsArticle.datePublished).startOf("ss").fromNow()}
                  </Text>
                </Space>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
