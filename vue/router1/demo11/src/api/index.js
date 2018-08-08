import axios from "axios";
export function getCarouselList() {
    return axios.get("http://localhost:8080/getCarouselList");
}
export function getHotPerform() {
    return axios.get("http://localhost:8080/getHotPerform ");
}