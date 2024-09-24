export default function handleLogout (req, res) {
  res.clearCookie('refresh_token', {
    httpOnly: true,
    secure: true,
    sameSite: 'None'
  })
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: true,
    sameSite: 'None'
  })
  res.status(200).json({ success: 'Logged out' })
}
