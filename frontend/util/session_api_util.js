export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
)

export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: "/api/users/"
  })
)
