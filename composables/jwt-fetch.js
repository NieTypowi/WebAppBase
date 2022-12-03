export function jwtFetch(url, method, body = {}, params = {}) {
  const token = localStorage.getItem("token");
  if (method == "POST") {
    return fethPost(url, token, body);
  }

  if (method == "PUT") {
    return fetchPut(url, token, body);
  }

  if (method == "DELETE") {
    return fetchDelete(url, token, params);
  }

  return fetchGet(url, token);
}

function fethPost(url, token, body) {
  return $fetch(url, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function fetchPut(url, token, body) {
  return $fetch(url, {
    method: "PUT",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function fetchGet(url, token) {
  return $fetch(url, {
    method: "GET",
    params: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function fetchDelete(url, token, eventId) {
  return $fetch(url + "?eventId=" + eventId, {
    method: "DELETE",
    params: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
