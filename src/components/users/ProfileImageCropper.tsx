export default function ProfileImageCropper({
  src,
  handleImageAndStatus,
  getCropImg,
}: any) {
  const [crop, setCrop] =
    useState <
    Crop >
    {
      unit: "px", // Can be 'px' or '%'
      x: 100,
      y: 100,
      width: 200,
      height: 200,
    };
  const [completedCrop, setCompletedCrop] = useState(null);
  const previewCanvasRef = useRef(null);
  const imageRef = useRef(null);

  const onImageLoaded = useCallback((image) => {
    // imageRef.current = image;
    console.log(image instanceof HTMLImageElement);
    console.log(imageRef.current instanceof HTMLImageElement);
  }, []);

  const onCropComplete = (crop) => {
    if (crop.width && crop.height) {
      setCompletedCrop(crop);
      console.log(crop);
    }
  };

  useEffect(() => {
    if (
      !completedCrop ||
      previewCanvasRef.current === null ||
      imageRef.current === null
    ) {
      console.log(imageRef.current);
      return;
    }

    const image = imageRef.current;
    const canvas = previewCanvasRef.current;
    console.log(image);

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;
    console.log(
      completedCrop.x,
      completedCrop.y,
      completedCrop.width,
      completedCrop.height
    );
    if (!image.complete) {
      console.log(image.complete);
      return;
    }
    // 해당 crop 영역의 이미지를 canvas에 그림
    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );
  }, [completedCrop]);

  const onImgCrop = () => {
    // getCropImg(completedCrop);
    if (previewCanvasRef.current) {
      const canvas = previewCanvasRef.current;
      const imgUrl = canvas.toDataURL("image/jpeg");
      // canvas.toBlob((blob) => {
      //   imagesUploadHandler(blob);
      // });
      handleImageAndStatus(false, imgUrl);
    }
  };
  return (
    <Wrapper>
      <ReactCrop
        crop={crop}
        aspect={1}
        onChange={(c, percentCrop) => setCrop(c)}
        onComplete={onCropComplete}
        // locked
      >
        <img ref={imageRef} src={src} onLoad={onImageLoaded} />
      </ReactCrop>
      <Btn onClick={onImgCrop}>crop</Btn>
      <canvas ref={previewCanvasRef} />
    </Wrapper>
  );
}
