const variables = {
  etf: "etf",
  etfHistory: "etfhistory",
};

export function setEtfStorage(data: any) {
  localStorage.setItem(variables.etf, data);
}

export function getEtfStorage(): any {
  return localStorage.getItem(variables.etf);
}

export function setEtfHistoryStorage(data: any) {
  localStorage.setItem(variables.etfHistory, data);
}

export function getEtfHistoryStorage(): any {
  return localStorage.getItem(variables.etfHistory);
}