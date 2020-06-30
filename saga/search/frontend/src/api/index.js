export const searchSkills = async (signal, search) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}?${params}`, { signal });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};