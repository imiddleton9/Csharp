from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')  # Homepage form

@main.route('/playlist', methods=['POST'])
def playlist():
    mood = request.form['mood']
    playlist = get_playlist_by_mood(mood)
    return render_template('playlist.html', playlist=playlist)

