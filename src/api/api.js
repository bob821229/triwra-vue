
import axios from 'axios';



const triwraRequest = axios.create({
  baseURL:'/src/data'
});




// 主管簡介
export const getSupervisorProfile = () => triwraRequest.get('/SupervisorProfile/SupervisorProfile.json');
// 研究一所~四所  1~4
export const getResearchInstitute = (x) => {
 return triwraRequest.get(`/DepartmentIntroduction/${x}.json`);
}
// 研究成果
export const getResearchResults = () => {
 return triwraRequest.get(`/ResearchResults/ResearchResults.json`);
}
// 會議空間
export const getMeetingSpace = () => {
 return triwraRequest.get(`/MeetingSpace/MeetingSpace.json`);
}
// 交通資訊與地圖
export const getTrafficInformationAndMaps = () => {
 return triwraRequest.get(`/TrafficInformationAndMaps/TrafficInformationAndMaps.json`);
}
