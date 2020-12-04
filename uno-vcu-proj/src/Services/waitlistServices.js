export function getContacts() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}` + 'contacts')
    .then(response => response.json())
}