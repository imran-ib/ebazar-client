import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Spinner from "components/Utils/Spinner/Spinner";
import { Container } from "react-bootstrap";

interface Props {
  nextStep?: any;
  previousStep?: any;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  eagerImages: string[];
  seteagerImages: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
  Disabled: boolean;
}

const StepThree = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [LocalImage, setLocalImage] = useState([{ image: "", largeImage: "" }]);
  const [loading, setLoading] = useState(false);

  const maxSize = 1048576;

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setLoading(true);
    const uploaders = acceptedFiles.map((file: any) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", "ebazar"); // Add tags for the images - {Array}
      formData.append("upload_preset", "ebazar"); // Replace the preset name with your own
      formData.append("folder", "ebazar");
      //@ts-ignore
      formData.append("api_key", process.env.CLOUDINARY_KEY);

      //@ts-ignore
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/iib-webdevs/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;

          // const fileURL = data.secure_url; // You should store this URL for future references in your app
          // setImage(data.secure_url); // From Parent
          LocalImage.push({
            image: data.secure_url,
            largeImage: data.eager[0].secure_url,
          });

          let LargeImagesArray = LocalImage.map((img) => img.image);
          let SmallImagesArray = LocalImage.map((img) => img.largeImage);
          // Filter out Empty Array
          let LargeImg = SmallImagesArray.filter((img: string) => img !== "");
          let SmallImg = LargeImagesArray.filter((img: string) => img !== "");
          props.setImages(LargeImg);
          props.seteagerImages(SmallImg);

          setLoading(false);
        });
    });
  }, []);
  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
  } = useDropzone({ onDrop, minSize: 0, maxSize });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  const thumbs = files?.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt={file.name} src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Container>
      <div className="Info ">
        <span>
          <span className="step ml-3">Step Three</span> <br />
        </span>
      </div>

      <div className="form-row">
        <div className="name">Upload Images Of Your Product</div>
        <div className="value">
          <div className="input-group">
            <div
              style={{ width: "80vw" }}
              className="container text-center mt-5"
            >
              {loading ? (
                <>
                  <Spinner />
                  <span className="mt-3">Your Images Are Being Uploaded</span>
                </>
              ) : (
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} multiple={true} />
                  {!isDragActive && "Click here or drop a file to upload!"}
                  {isDragActive && !isDragReject && "Drop it like it's hot!"}
                  {isDragReject && "File type not accepted, sorry!"}
                </div>
              )}
            </div>
          </div>

          <div className="label--desc text-center mt-5">
            Upload Photo Of Item. Max file size 5 MB
          </div>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>

      <button
        style={{ background: "#ff3331", color: "#fff" }}
        disabled={loading}
        className="btn"
        onClick={props.previousStep}
      >
        prev
      </button>

      <button
        style={{ background: "#ff3331", color: "#fff" }}
        disabled={loading}
        className="btn float-right"
        onClick={props.nextStep}
      >
        Next
      </button>
    </Container>
  );
};

const baseStyle = {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: any = {
  display: "flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default StepThree;
