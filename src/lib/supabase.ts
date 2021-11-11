import { supabase } from "../supabaseClient";

export async function downloadImage(
  path: string,
  onDownload: (url: string) => void
) {
  try {
    const { data, error } = await supabase.storage
      .from("poster-images")
      .download(path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    onDownload(url);
  } catch (error: any) {
    console.log("Error downloading image: ", error.message);
  }
}
export async function removeImage(path: string) {
  let { error: deleteError } = await supabase.storage
    .from("poster-images")
    .remove([path]);
  if (deleteError) {
    throw deleteError;
  }
}
