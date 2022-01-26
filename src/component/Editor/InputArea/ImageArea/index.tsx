import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deriveFadeIn, PopUp } from "../../../../styles/animation";
import { Color } from "../../../../styles/Color";
import { supabase } from "../../../../supabaseClient";
import { ImageType } from "../../../../types/poster";
import { downloadImage, removeImage } from "../../../../lib/supabase";
import { ImageSizeRadioButton } from "./ImageSizeRadioButton";
import { IMAGE_SIZE } from "../../../../styles/Size";
export const ImageArea = ({ type }: { type: ImageType }) => {
  const [property, setProperty] = useAtom(type.atom);
  const [uploading, setUploading] = useState(false);
  const [localUrl, setLocalUrl] = useState("");
  useEffect(() => {
    if (property.filePath) {
      downloadImage(property.filePath, (url) => setLocalUrl(url));
    }
  }, [property.filePath]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("请选择需要上传的图片");
      }
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("poster-images")
        .upload(filePath, file);
      if (uploadError) {
        throw uploadError;
      }
      if (property.filename !== "") removeImage(property.filePath);
      setProperty({ ...property, filename: file.name, filePath: filePath });
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSizeSelected = (name: string) => {
    let size: IMAGE_SIZE;
    switch (name) {
      case "sm":
        size = IMAGE_SIZE.SM;
        break;
      case "md":
        size = IMAGE_SIZE.MD;
        break;
      case "lg":
        size = IMAGE_SIZE.LG;
        break;
      default:
        size = IMAGE_SIZE.MD;
    }
    setProperty({ ...property, size: size });
  };

  return (
    <FadeInWrapper>
      <AreaTitle>
        图片{property.filename ? `:${property.filename}` : null}
      </AreaTitle>
      {localUrl ? (
        <ImagePreview imageWidth={300} src={localUrl} alt="preview image" />
      ) : null}
      <FileInputWrapper>
        <FileInputLabel htmlFor={`${type.atom}`}>
          {uploading ? "加载中" : "上传图片"}
          <FileInput
            id={`${type.atom}`}
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />
        </FileInputLabel>
        <ImageSizeRadioButton onSelected={handleSizeSelected} />
      </FileInputWrapper>
    </FadeInWrapper>
  );
};

const Wrapper = deriveFadeIn(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`);

const FadeInWrapper = deriveFadeIn(Wrapper);

interface ImageProps {
  imageWidth?: IMAGE_SIZE;
}
const ImagePreview = styled.img<ImageProps>`
  width: ${(props) => (props.imageWidth ? props.imageWidth : IMAGE_SIZE.MD)}px;
  max-width: 100%;
`;
const AreaTitle = styled.div`
  align-self: flex-start;
  font-size: 14px;
  color: ${Color.MAIN};
`;
const FileInputWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

interface LabelPropers {
  clicked?: boolean;
}
const FileInputLabel = styled.label<LabelPropers>`
  flex-grow: 1;
  display: inline-block;
  min-height: 20px;
  min-width: 20px;
  padding: 5px;
  border: 1px solid ${Color.MAIN};
  border-radius: 9999px;
  color: ${Color.MAIN};
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 1px ${Color.MAIN};
  transition: 0.2s;
  ${(props) => (props.clicked ? PopUp : null)};
  &:hover {
    background-color: ${Color.MAIN};
    color: white;
    border-color: ${Color.MAIN};
    box-shadow: 0px 0px 3px ${Color.MAIN};
  }
`;
const FileInput = styled.input`
  visibility: hidden;
  position: absolute;
`;
