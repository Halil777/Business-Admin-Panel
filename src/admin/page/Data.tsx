import React, { useState } from "react";
import { useGetData } from "../features/data/data.hooks";
import { Button, Empty, Row, Spin, Typography } from "antd";
import DataTable from "../components/data/DataTable";
import { motion } from "framer-motion";
import AddData from "./AddData";

type DataType =
  | "home"
  | "about"
  | "service_slide"
  | "portfolia"
  | "other"
  | "mail"
  | "contact"
  | "social_media"
  | "service_item";

interface IProps {
  type: DataType;
  title: string;
}

const Data: React.FC<IProps> = (props) => {
  const [openAdd, setOpenAdd] = useState(false);
  const { isLoading, isError, data } = useGetData();
  if (isLoading) {
    return <Spin size="large" />;
  }
  if (isError) {
    return <Empty />;
  }
  return (
    <motion.div
      key={props.type}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Row justify={"space-between"} align={"middle"}>
        <Typography.Title>{props.title}</Typography.Title>
        <Button
          type="primary"
          onClick={() => {
            setOpenAdd(true);
          }}
        >
          Täze goşmak
        </Button>
      </Row>
      <DataTable
        data={data!.filter((it) => it.type.includes(props.type))}
        fullData={data}
      />
      <AddData
        type="add"
        open={openAdd}
        fullData={data}
        onClose={() => {
          setOpenAdd(false);
        }}
      />
    </motion.div>
  );
};

export default Data;
