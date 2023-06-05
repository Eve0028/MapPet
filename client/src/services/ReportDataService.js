import http from "../http-common";

class ReportDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/", data);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }

  deleteAll() {
    return http.delete(`/`);
  }

  findByFilter(petName="", location="") {
    return http.get(`/?petName=${petName}&lastSeen=${location}`);
  }

  // findByPetLocation(location) {
  //   return http.get(`/?lastSeen=${location}`);
  // }
}

export default new ReportDataService();