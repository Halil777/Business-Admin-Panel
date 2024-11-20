import {
  Button,
  Card,
  Col,
  Empty,
  Image,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import React, { useState } from "react";
import { FileAddOutlined, DeleteFilled, LinkOutlined } from "@ant-design/icons";
import AddAssets from "./AddAssets";
import { useAssets, useDeleteAssets } from "../features/assets/assets.hooks";

interface IProps {
  selectable: boolean;
  onSelect: (url: string, id: number) => void;
}

const Assets: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState(false);
  const deleteAssets = useDeleteAssets();
  const { isLoading, data, error } = useAssets();
  if (isLoading) {
    return <Spin size="large" />;
  }
  if (error) {
    return <Empty />;
  }
  return (
    <div style={{ width: "100%" }}>
      <Row align={"middle"} justify={"space-between"}>
        <Typography.Title>Saýt faýllary</Typography.Title>
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Täze goşmak
        </Button>
      </Row>
      <Row gutter={[16, 16]}>
        {data?.map((it, index) => {
          return (
            <Col xs={12} sm={8} md={4} key={`asset-${index}`}>
              <Card
                onClick={() => {
                  if (props.selectable) {
                    setSelected(it.id);
                    props.onSelect(it.url, it.id);
                  }
                }}
                style={{
                  backgroundColor: selected == it.id ? "blue" : "white",
                }}
              >
                <Space direction="vertical">
                  <Image
                    width={"100%"}
                    height={200}
                    style={{
                      objectFit: "contain",
                    }}
                    src={it.url}
                    placeholder={
                      <Image
                        src="/placeholder.png"
                        width={"100%"}
                        height={200}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    }
                  />
                  <Row justify={"space-between"}>
                    <Button
                      icon={<LinkOutlined />}
                      onClick={() => {
                        window.open(it.url);
                      }}
                    >
                      Open URL
                    </Button>
                    <Button
                      icon={<DeleteFilled />}
                      onClick={async () => {
                        const isDelete = window.confirm("Pozmalymy?");
                        if (isDelete) {
                          await deleteAssets.mutateAsync(it.id.toString());
                        }
                      }}
                    ></Button>
                  </Row>
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
      <AddAssets
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Assets;
