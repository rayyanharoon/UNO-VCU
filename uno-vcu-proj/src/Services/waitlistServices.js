export function getContacts() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cars`)
    .then(response => response.json())
}