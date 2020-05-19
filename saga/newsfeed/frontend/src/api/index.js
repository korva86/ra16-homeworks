export async function firstFetchNews() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

export async function fetchNews(id) {
    const Q = new URLSearchParams({lastSeenId: id});
    const response = await fetch(`${process.env.REACT_APP_API_URL}?${Q}`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}