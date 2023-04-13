const api = {
  HOME_API: (latitude, longitude) =>
    `list/v5?lat=${latitude ? latitude : 12.9351929}&lng=${
      longitude ? longitude : "77.62448069999999"
    }&page_type=DESKTOP_WEB_LISTING`,
};
export default api