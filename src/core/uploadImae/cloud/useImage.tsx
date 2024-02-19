/* import { BlobServiceClient } from "@azure/storage-blob";

async function fileUpload(file: any, containerName: string): Promise<any> {
  try {
    const storageAccount = "askmarked";
    const sasToken =
      "?sv=2022-11-02&ss=b&srt=sco&sp=rwlaciytfx&se=2024-02-19T13:09:56Z&st=2024-02-19T05:09:56Z&spr=https&sig=4iJEkX0ANggJczVQbnwNA77JJGZ5UF8wFQ8zMLbyFEE%3D";

    const blobService = new BlobServiceClient(
      `https://${storageAccount}.blob.core.windows.net/${sasToken}`
    );

    const containerClient = blobService.getContainerClient(containerName);

    const blobClient = containerClient.getBlockBlobClient(file[0].file.name);

    const options = {
      blobHTTPHeaders: {
        blobContentType: file[0].file.type,
      },
    };

    const res = await blobClient.uploadBrowserData(file[0].file, options);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (res) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const fileString = `https://${storageAccount}.blob.core.windows.net/${containerName}/${file[0].file.name}`;
      return fileString;
    }
  } catch (error) {
    throw Error("Error uploading file to Azure");
  }
}

export { fileUpload };
 */