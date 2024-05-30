import Dropzone from "react-dropzone";
import DropZoneImageLayout from "./dropzone-image-layout";

const DropZoneImage = ({ handleDrop, name }) => {
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <DropZoneImageLayout
          getRootProps={getRootProps()}
          getInputProps={getInputProps()}
          isDragActive={isDragActive}
          name={name}
        />
      )}
    </Dropzone>
  );
};
export default DropZoneImage;
