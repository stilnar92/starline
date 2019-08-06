export const apiDomain = window.location.href.includes("staging")
    ? "https://starline-fake-server.herokuapp.com"
    : `http://localhost:3001`;