export const ajax = (method: 'GET' | 'POST') => (url: string) => (body?: BodyInit) => fetch(url, {method, body});
