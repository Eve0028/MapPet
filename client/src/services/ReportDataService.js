import http from "../http-common";

class ReportDataService {
  getAll() {
    return http.get("/reports");
  }

  get(id) {
    return http.get(`/reports/${id}`);
  }

  create(data) {
    return http.post("/", data);
  }

  update(id, data) {
    return http.put(`/reports/${id}`, data);
  }

  delete(id) {
    return http.delete(`/reports/${id}`);
  }

  deleteAll() {
    return http.delete(`/reports`);
  }

  findByPetName(petName) {
    return http.get(`/reports?pet-name=${petName}`);
  }
}

export default new ReportDataService();