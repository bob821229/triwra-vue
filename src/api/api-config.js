var API_CONFIG = {
  baseUrl: import.meta.env.VITE_BaseUrl, 
  endpoints: {
          serverStatus:import.meta.env.VITE_ServerStatus, //私服器狀態
          statustype:import.meta.env.VITE_Statustype, //狀態類型
          history:import.meta.env.VITE_History, //歷史紀錄
    }
}

export default API_CONFIG;