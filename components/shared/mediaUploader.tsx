"use client"
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccesHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);
    toast({
      title: "Image charger avec succées",
      description: "Votre compte a été déduis de 1 crédit",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = (result: any) => {
    toast({
      title: "Quelque chose s'est produite lors du chargement du fichier",
      description: "Veuillez réessayer s'il vous plaît",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="syntek"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccesHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className=" flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>
          {publicId ? (
            <>
              <div className="cursor-pointer overflow-hidden rounded-[10px]">
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="media-uploader_cldImage"
                />
              </div>
            </>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <Image
                  src="/assets/icons/add.svg"
                  alt="Ajoute l'image"
                  width={24}
                  height={24}
                />
              </div>
              <p className="p-14-medium">Clique ici pour télécharger l'image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
