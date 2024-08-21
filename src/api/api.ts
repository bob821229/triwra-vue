
import axios from 'axios';

// const baseURL= import.meta.env.VITE_BASE_URL
let baseURL=''
if(import.meta.env.PROD){
  // baseURL='/triwra-vue/data'   //github用
  baseURL='/data'
}else{
  baseURL='/data'
  // baseURL='/src/data'
}
const triwraRequest = axios.create({
  baseURL:baseURL
});




// 主管簡介
export const getSupervisorProfile = () => triwraRequest.get('/SupervisorProfile/SupervisorProfile.json');
// 研究一所~四所  1~4
export const getResearchInstitute = (x:string) => {
 return triwraRequest.get(`/DepartmentIntroduction/${x}.json`);
}
// 研究成果
export const getResearchResults = () => {
 return triwraRequest.get(`/ResearchResults/ResearchResults1.json`);
}
// 會議空間
export const getMeetingSpace = () => {
 return triwraRequest.get(`/MeetingSpace/MeetingSpace.json`);
}
// 交通資訊與地圖
export const getTrafficInformationAndMaps = () => {
 return triwraRequest.get(`/TrafficInformationAndMaps/TrafficInformationAndMaps.json`);
}

// 聯絡我們
export const getContacts = () => {
  return triwraRequest.get(`/ContactUs/contacts.json`);
 }
