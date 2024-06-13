import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import { auth, storage } from "../../../../firebase";
import { useCallback, useEffect, useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import RequireAuth from "@/components/common/RequireAuth";
import styled from "styled-components";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  border: solid 1px black;
  .reset {
    border: solid 1px black;
    background: white;
    &:hover {
      /* background: #f5f5f5; */
      /* color: white; */
    }
  }
  .save {
    border: solid 1px #fed532;
    background: #ffde5b;
    position: relative;
    top: 70px;
    &:hover {
      background: #ff903c;
      color: white;
    }
  }
`;
const AvatarImg = styled.div`
  width: 200px;
  height: 200px;
  background: black;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const Btn = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: solid 1px black;
`;

const ImgCropModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
export default function SettingProfile() {
  const [preview, setPreview] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [openCrop, setOpenCrop] = useState(false);
  // const imageInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "px", // Can be 'px' or '%'
    x: 100,
    y: 100,
    width: 200,
    height: 200,
  });
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (
      !completedCrop ||
      previewCanvasRef.current === null ||
      previewRef.current === null
    ) {
      return;
    }

    const image = previewRef.current;
    const canvas = previewCanvasRef.current;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return console.log("2d 캔버스 가져오기 실패");

    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;

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

  const getAvatarImg = () => {
    const { userId } = getUserProfile();
    const pathRef = ref(storage, `profile-image/${userId}`);
    let imgUrl;
    getDownloadURL(pathRef)
      .then((url) => {
        imgUrl = url;
        console.log("이미지 가져오기 성공");
      })
      .catch((err) => {
        console.log("이미지 가져오기 실패, ", err);
      });

    return imgUrl;
  };
  const userProfileUpdateHandler = (username: string) => {
    const user = auth.currentUser;
    if (!user) return;
    updateProfile(user, {
      displayName: username,
      photoURL: getAvatarImg(),
    })
      .then(() => {
        console.log("upload");
      })
      .catch(() => {
        console.log("업로드 실패");
      });
  };
  // const onImageLoaded = useCallback((image) => {
  //   // imageRef.current = image;
  //   console.log(image instanceof HTMLImageElement);
  //   console.log(previewRef.current instanceof HTMLImageElement);
  // }, []);

  const profileSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    const username = e.currentTarget.value;
    if (imageRef && imageRef.current && imageRef.current.files) {
      const fileImg = imageRef.current.files[0];
      userProfileUpdateHandler(username);
      imagesUploadHandler(fileImg);
      router.push("/users/" + user?.uid);
    }
  };

  const getUserProfile = () => {
    // 로그인 했는지 확인해야됨.
    const user = auth.currentUser;

    const username = user?.displayName;
    const photoURL = user?.photoURL;
    const userId = user?.uid;

    return { username, photoURL, userId };
  };

  const imagesUploadHandler = (file: any) => {
    const reader = new FileReader();
    console.log(file);
    reader.onload = function (e) {
      const dataUrl = e.target?.result;
      console.log(dataUrl);
    };
    reader.readAsDataURL(file);
    const userId = auth.currentUser?.uid;
    const storeageRef = ref(storage, `profile-image/${userId}`);
    uploadBytes(storeageRef, file).then((snapshot) => {
      console.log("uploaded a file");
      console.log(snapshot);
    });
  };
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleImgUpload = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
    if (e.currentTarget.files) {
      const imageFile = e.currentTarget.files[0];
      const fileSize = imageFile.size / 1024 / 1024; // MB 사이즈
      const acceptedImgTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
      ];

      if (!acceptedImgTypes.includes(imageFile.type)) {
        alert("지원하지 않는 파일 타입입니다.");
        return console.log(imageFile.type);
      }

      if (fileSize >= 5) {
        alert("파일 용량이 너무 큽니다. 5MB 이하의 이미지를 업로드해주세요.");
        return;
      }

      if (imageFile) {
        const objectUrl = URL.createObjectURL(imageFile);
        console.log(objectUrl);
        setPreview(objectUrl);
        setOpenCrop(true);
      } else {
        setPreview(null);
      }
    }
  };
  const handleImageAndStatus = (isOpen: boolean, imgUrl: string) => {
    setOpenCrop(isOpen);
    // console.log(imgUrl);
    setSrc(imgUrl);
  };

  const onCropComplete = (crop: Crop) => {
    if (crop.width && crop.height) {
      setCompletedCrop(crop);
    }
  };

  const onImgCrop = () => {
    // getCropImg(completedCrop);
    if (previewCanvasRef.current) {
      const canvas = previewCanvasRef.current;
      const imgUrl = canvas.toDataURL("image/jpeg");
      console.log(imgUrl);
      // canvas.toBlob((blob) => {
      //   imagesUploadHandler(blob);
      // });
      handleImageAndStatus(false, imgUrl);
    }
  };
  return (
    <Wrapper>
      <div>setting profile</div>

      <FormContainer onSubmit={profileSubmitHandler}>
        {openCrop && (
          <ImgCropModal>
            <ReactCrop
              crop={crop}
              aspect={1}
              onChange={(c, percentCrop) => setCrop(c)}
              onComplete={onCropComplete}
              // locked
            >
              <img
                ref={previewRef}
                src={preview || ""}
                // onLoad={onImageLoaded}
              />
            </ReactCrop>
            <Btn type="button" onClick={onImgCrop}>
              crop
            </Btn>
            <canvas ref={previewCanvasRef} />
          </ImgCropModal>
        )}
        <AvatarImg>
          <img src={src || " "}></img>
        </AvatarImg>
        <input
          ref={imageRef}
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleImgUpload}
        />
        <label>
          username
          <input type="text" name="username" />
        </label>
        <label>
          email
          <input
            type="text"
            name="email"
            value={auth?.currentUser?.email || ""}
            disabled
          />
        </label>
        {/* <Btn type="button" className="reset">
            비밀번호 재설정
          </Btn> */}
        <Btn type="submit" className="save">
          save
        </Btn>
      </FormContainer>
    </Wrapper>
  );
}
