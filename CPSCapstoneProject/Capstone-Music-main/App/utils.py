import requests

API_KEY = 'your_lastfm_api_key'

def get_playlist_by_mood(mood):
    url = f"http://ws.audioscrobbler.com/2.0/?method=track.search&track={mood}&api_key={API_KEY}&format=json"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        tracks = data['results']['trackmatches']['track']
        return tracks  # List of tracks
    return []