import http from "../http-common";
import axios from "axios";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    console.log(formData)

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles() {
    return http.get("/files");
  }

  getImage(name) {
    let config = {
      // example url
      url: `${import.meta.env.VITE_API_URL}/reports/files/${name}`,
      method: 'GET',
      responseType: 'blob'
    }
    return axios(config)
  }
}

export default new UploadFilesService();