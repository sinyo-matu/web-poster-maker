import { PrimitiveAtom, useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { downloadImage } from "../../lib/supabase";
import placeholderPic from "../../placeholder.png";
import { deriveImageSize, IMAGE_SIZE } from "../../styles/Size";
import { ImageProperty } from "../../types/poster";

export const Image = ({ atom }: { atom: PrimitiveAtom<ImageProperty> }) => {
  const [property] = useAtom(atom);
  const [localUrl, setLocalUrl] = useState("");
  useEffect(() => {
    if (property.filePath)
      downloadImage(property.filePath, (url) => setLocalUrl(url));
  }, [property]);

  return (
    <Wrapper imageWidth={property.size}>
      {localUrl ? (
        <ImageView src={localUrl} alt="image" />
      ) : (
        <ImageView src={placeholderPic} alt="placeholder" />
      )}
    </Wrapper>
  );
};

interface WrapperProps {
  imageWidth?: IMAGE_SIZE;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) =>
    props.imageWidth
      ? deriveImageSize(props.imageWidth)
      : deriveImageSize("md")}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageView = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
