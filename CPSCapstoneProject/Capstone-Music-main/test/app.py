from flask import Flask

def create_app():
    app = Flask(__name__) # __name__ here is "app"

    from .routes import main
    app.register_blueprint(main)

    return app