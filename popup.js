// import openai_secret_manager
// import openai
// from flask import Flask, request, jsonify

// app = Flask(__name__)

// # Set up OpenAI API credentials
// secrets = openai_secret_manager.get_secret("openai")
// openai.api_key = secrets["api_key"]


// # Define function to get chatbot response
// def get_chatbot_response(movie_title, country):
//     response = openai.Completion.create(
//         engine="text-davinci-002",
//         prompt=(f"Movie: {movie_title}\n"
//                 f"Is this movie available on any video streaming service in {country}?"),
//         max_tokens=150,
//         n=1,
//         stop=None,
//         temperature=0.5,
//     )

//     return response.choices[0].text.strip()


// # Define route for web extension
// @app.route("/check_movie_streaming", methods=["POST"])
// def check_movie_streaming():
//     movie_title = request.form.get("title")
//     country = request.form.get("country")
//     response = get_chatbot_response(movie_title, country)
//     return jsonify({"response": response})


// if __name__ == "__main__":
//     app.run(debug=True)


//Python flask famework
// it takes an additional argument country in the get_chatbot_response function. This argument is included in the prompt sent to the ChatGPT API to specify the country where the movie should be checked for streaming availability.

// To use this code, you would need to have a web extension with a form that sends a POST request containing the movie title and country to the /check_movie_streaming route. The extension would then display the response returned by the server.