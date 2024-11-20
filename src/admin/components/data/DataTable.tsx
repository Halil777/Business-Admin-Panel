import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import type { TableProps } from "antd";
import { DataModel } from "../../features/data/data.dto";
import { useDeleteData } from "../../features/data/data.hooks";
import AddData from "../../page/AddData";

interface IProps {
  data: DataModel[];
  fullData: DataModel[] | undefined;
}
const DataTable: React.FC<IProps> = (props) => {
  const deleteData = useDeleteData();
  const [openEdit, setOpenEdit] = useState(false);
  const [selected, setSelected] = useState<DataModel | undefined>(undefined);
  const columns: TableProps<DataModel>["columns"] = [
    {
      title: "Title",
      dataIndex: "title_tm",
      key: "title_tm",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (item, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            onClick={() => {
              setOpenEdit(true);
              setSelected(item);
            }}
          >
            Edit
          </Button>
          <Button
            danger
            onClick={async () => {
              const isDelete = window.confirm("Pozmalymy?");
              if (isDelete) {
                await deleteData.mutateAsync(record.id.toString());
              }
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={props.data} />
      <AddData
        type="edit"
        open={openEdit}
        data={selected}
        fullData={props.fullData}
        key={selected?.id.toString()}
        onClose={() => {
          setOpenEdit(false);
        }}
      />
    </div>
  );
};

export default DataTable;
