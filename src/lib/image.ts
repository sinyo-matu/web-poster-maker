export async function downloadImage(
  path: string,
  onDownload: (url: string) => void
) {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_IMAGE_SERVICE_URL}/image/${path}`,
      {
        method: "GET",
      }
    );
    const url = URL.createObjectURL(await res.blob());
    onDownload(url);
  } catch (error: any) {
    console.log("Error downloading image: ", error.message);
  }
}
export async function removeImage(path: string) {
  try {
    await fetch(`${process.env.REACT_APP_IMAGE_SERVICE_URL}/image/${path}`, {
      method: "DELETE",
    });
  } catch (error: any) {
    console.log("Error removing image: ", error.message);
  }
}

export async function uploadImage(file: File) {
  try {
    const formData = new FormData();
    formData.append("image", file);
    await fetch(`${process.env.REACT_APP_IMAGE_SERVICE_URL}/image`, {
      method: "POST",
      body: formData,
    });
  } catch (error: any) {
    console.log("Error uploading image: ", error.message);
  }
}
