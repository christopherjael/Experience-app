import { useState } from 'react';
import {
  CameraResultType,
  Camera,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { isPlatform } from '@ionic/react';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { PhotoItem } from '../model/PhotoItem';

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    console.log(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const saveFileImage = await savePhoto(photo, fileName);
    console.log(photo, fileName);

    setPhotos([...photos, saveFileImage]);
  };

  const savePhoto = async (
    photo: Photo,
    fileName: string
  ): Promise<PhotoItem> => {
    let base64data: string;
    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: fileName,
        directory: Directory.Data,
      });
      base64data = file.data;
    } else {
      base64data = await base64FromPath(photo.webPath!);
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      directory: Directory.Data,
      data: photo.path!,
    });
    console.log(savedFile);

    return {
      filePath: fileName,
      webViewPath: photo.webPath,
    };
  };

  async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };

      reader.readAsDataURL(blob);
    });
  }

  const deletePhoto = async (fileName: string) => {};

  return {
    photos,
    takePhoto,
    deletePhoto,
  };
};
