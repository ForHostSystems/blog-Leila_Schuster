import picturePlaceholder from "@/assets/Pcture-Placeholder.png";

export function convertToUrl(image: File | string | null) {
  if (image == null) {
    return picturePlaceholder;
  }

  if (typeof image == "string") {
    return image;
  }

  return URL.createObjectURL(image);
}
