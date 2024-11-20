import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import ReactImagePickerEditor, {
  ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import { useAddAssets } from "../features/assets/assets.hooks";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const AddAssets: React.FC<IProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const config2: ImagePickerConf = {
    borderRadius: "8px",
    language: "en",
    width: "330px",
    height: "250px",
    objectFit: "contain",
    compressInitial: null,
  };
  const initialImage = "";
  const addAssets = useAddAssets();

  return (
    <div>
      <Drawer
        placement={"right"}
        width={1500}
        onClose={props.onClose}
        open={props.open}
        extra={
          <Space>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button
              loading={loading}
              type="primary"
              onClick={async () => {
                if(file?.type !== 'text/html'){
                  setLoading(true);
                  const isSuccess = await addAssets.mutateAsync({
                    file: file,
                  });
                  setLoading(false);
                  if (isSuccess) {
                    props.onClose();
                  } else {
                    alert("Error");
                  }
                }else{
                  alert("Faýl saýlaň!")
                }
              }}
            >
              Add
            </Button>
          </Space>
        }
      >
        <ReactImagePickerEditor
          config={config2}
          imageSrcProp={initialImage}
          imageChanged={async (newDataUri: any) => {
            const base64Response = await fetch(newDataUri);
            setFile(await base64Response.blob());
          }}
        />
      </Drawer>
    </div>
  );
};

export default AddAssets;
