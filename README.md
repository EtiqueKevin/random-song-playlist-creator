# SETUP 

## Needs
- docker and docker compose
- a spotify account

## Access to the spotify API
- Click on `create app` on this website: [spotify developer](https://developer.spotify.com/dashboard) (you need to be connected with a spotify account)
- Add the name and the description you want
- Add this URI to the Redirect URIs field : http://127.0.0.1:3000/callback
- Select Web API in the field API's used
- Click on save

## Modify the .env
- Add the client ID and the client secret information (you can find both in your app information in your spotify developer dashboard)
- Save the file

## Start the docker compose
- Open the terminal in your project repertory
- Use this command: `docker compose up --build -d`, if you want to shut it down use the command `docker compose down`

## Use the app
- Now you can go on this adress <http://localhost:8080/>
- Connect to your spotify account with the left button and after you can generate your playlist with the right button
