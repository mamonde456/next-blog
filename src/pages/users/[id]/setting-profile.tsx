import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
import ProfileImageCropper from "@/components/users/ProfileImageCropper";

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

const imagesUploadHandler = (file: any) => {
  const userId = auth.currentUser?.uid;
  const storeageRef = ref(storage, `profile-image/${userId}`);
  uploadBytes(storeageRef, file).then((snapshot) => {
    console.log("uploaded a file");
    console.log(snapshot);
  });
};
export default function SettingProfile() {
  const [preview, setPreview] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [openCrop, setOpenCrop] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

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

  const profileSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (imageRef) {
      const fileImg = imageRef?.current?.files?.[0];
      console.log(fileImg);
      // userProfileUpdateHandler(username);
      // imagesUploadHandler(fileImg);
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
        setPreview(objectUrl);
        setOpenCrop(true);
      } else {
        setPreview(null);
      }
    }
  };
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleImageAndStatus = (isOpen: boolean, imgUrl: string) => {
    setOpenCrop(isOpen);
    setSrc(imgUrl);
  };
  return (
    <RequireAuth>
      <Wrapper>
        <div>setting profile</div>

        <FormContainer onSubmit={profileSubmitHandler}>
          {openCrop && (
            <ProfileImageCropper
              src={preview}
              handleImageAndStatus={handleImageAndStatus}
            ></ProfileImageCropper>
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
          </Btn>
          <Btn type="submit" className="save">
            save
          </Btn> */}
        </FormContainer>
      </Wrapper>
    </RequireAuth>
  );
}
