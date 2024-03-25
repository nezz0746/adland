export const uploadFile = async (file: File) => {
  const data = new FormData();
  data.set("file", file);
  const res = await fetch("/api/files", {
    method: "POST",
    body: data,
  });
  const { IpfsHash } = await res.json();

  return IpfsHash;
};
