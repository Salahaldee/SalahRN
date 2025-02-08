export const baseUrl = "https://salahserver.onrender.com"

export const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,

    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch Error", error?.message);
        });
}

export const login = async (body) => {
    const route = `/login`;
    return await fetchApi(route, 'POST', JSON.stringify(body))
}

export const createUser = async (body) => {
    const route = `/createUser`;
    return await fetchApi(route, 'POST', JSON.stringify(body))
}
export const FindUser = async (body) => {
    const route = `/FindUser`;
    return await fetchApi(route, 'POST', JSON.stringify(body))

}
export const  DeleteUser= async (body) => {
    const route = `/DeleteUser`;
    return await fetchApi(route, 'POST', JSON.stringify(body))

}
export const createProduct = async (body) => {
    const route = `/createProduct`;
    return await fetchApi(route, 'POST', JSON.stringify(body))

}
export const FindProduct = async (body) => {
    const route = `/FindProduct`;
    return await fetchApi(route, 'POST', JSON.stringify(body))

}
export const DeleteProduct = async (body) => {
    const route = `/DeleteProduct`;
    return await fetchApi(route, 'POST', JSON.stringify(body))

}
export const updateUser = async (body) => {
    const route = `/updateUser`;
    return await fetchApi(route, 'POST', JSON.stringify(body))
}